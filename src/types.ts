export interface AppConfig {
  appName: string;
  version: string;
  platform: 'android' | 'ios' | 'web';
  language: string;
}

export interface ComponentProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface AppState {
  isLoading: boolean;
  error?: string | null;
  data?: Record<string, any>;
}

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
}
