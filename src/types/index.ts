export interface RegistrationFormData {
  fullName: string;
  phone: string;
  company: string;
  position: string;
  email: string;
  questions?: string;
}

export interface ModalState {
  isOpen: boolean;
  type: 'success' | 'error';
  message: string;
}

export interface Lecture {
  id: number;
  title: string;
  speaker: string;
  time: string;
}