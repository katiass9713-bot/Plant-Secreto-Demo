export interface ClinicalCase {
  id: string;
  specialty: string;
  difficulty: string;
  patient: {
    name: string;
    age: number;
    gender: string;
    occupation?: string;
  };
  clinicalHistory: string;
  physicalExam: string;
  vitalSigns: {
    bp: string;
    hr: number;
    rr: number;
    temp: number;
    spo2: number;
  };
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  nursingConduct: string;
  medicationDosage: string;
  treatment: string;
}
