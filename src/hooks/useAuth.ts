import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export interface User {
  id: string;
  email: string;
}

let globalUser: User | null = null;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach(listener => listener());
}

// Test connection on boot
(async () => {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
})();

export function useAuth() {
  const [user, setUser] = useState<User | null>(globalUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const listener = () => setUser(globalUser);
    listeners.add(listener);

    // Initial load from local storage
    const stored = localStorage.getItem('plantao_user_email');
    if (stored && !globalUser) {
      globalUser = { id: stored, email: stored };
      notifyListeners();
    }

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const signIn = async (email: string) => {
    setLoading(true);
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      
      // Save lead to Firestore - Fire and forget
      if (db) {
        setDoc(doc(db, 'leads', sanitizedEmail), {
          email: sanitizedEmail,
          capturedAt: serverTimestamp(),
        }).catch((error) => {
          console.warn("Could not capture lead in Firestore:", error);
        });
      }

      const newUser = { id: sanitizedEmail, email: sanitizedEmail };
      globalUser = newUser;
      localStorage.setItem('plantao_user_email', sanitizedEmail);
      notifyListeners();
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    globalUser = null;
    localStorage.removeItem('plantao_user_email');
    notifyListeners();
  };

  return { user, loading, signIn, signOut };
}
