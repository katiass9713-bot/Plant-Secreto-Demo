import { useState } from 'react';
import type { FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Stethoscope, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Auth() {
  const { user, signIn, loading } = useAuth();
  const [email, setEmail] = useState('');

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        await signIn(email.trim());
        toast.success('Bateu o ponto com sucesso!');
      } catch (error) {
        toast.error('Erro ao entrar no plantão. Tente novamente.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(195 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 w-full max-w-md animate-scale-in">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            <Stethoscope size={40} className="text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-primary text-glow-cyan tracking-wider uppercase mb-2">
            PLANTÃO SECRETO
          </h1>
          <p className="text-muted-foreground">
            Desafio da Professora Kátia - Enfermagem
          </p>
        </div>

        <div className="card-game p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-heading font-bold text-primary uppercase tracking-widest px-1">
                E-mail para acesso
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: enf@voce.com.br"
                className="w-full bg-background border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-neon text-primary-foreground py-4 rounded-xl font-heading text-lg tracking-wider mt-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Entrando...
                </>
              ) : (
                'BATER PONTO'
              )}
            </button>
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest opacity-60">
              Uso exclusivo para alunos e convidados
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
