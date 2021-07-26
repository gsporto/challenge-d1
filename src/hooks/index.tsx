import React, { ReactNode } from 'react';
import { ToastProvider } from 'react-toast-notifications';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default AppProvider;
