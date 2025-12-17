'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { authConfig, validateCredentials, type DemoUser } from '@/config/auth.config';

interface AuthState {
  user: Omit<DemoUser, 'password'> | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface LoginResult {
  success: boolean;
  error?: string;
}

export function useAuth() {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  // Load user from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(authConfig.session.storageKey);
    if (stored) {
      try {
        const userData = JSON.parse(stored);
        setState({
          user: userData,
          isLoading: false,
          isAuthenticated: true,
        });
      } catch {
        localStorage.removeItem(authConfig.session.storageKey);
        setState({ user: null, isLoading: false, isAuthenticated: false });
      }
    } else {
      setState({ user: null, isLoading: false, isAuthenticated: false });
    }
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<LoginResult> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const user = validateCredentials(email, password);

    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...userWithoutPassword } = user;
      localStorage.setItem(authConfig.session.storageKey, JSON.stringify(userWithoutPassword));
      setState({
        user: userWithoutPassword,
        isLoading: false,
        isAuthenticated: true,
      });
      return { success: true };
    }

    return {
      success: false,
      error: authConfig.loginPage.errorMessages.invalidCredentials,
    };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(authConfig.session.storageKey);
    setState({ user: null, isLoading: false, isAuthenticated: false });
    router.push(authConfig.redirects.afterLogout);
  }, [router]);

  const signup = useCallback(
    async (_name: string, _email: string, _password: string): Promise<LoginResult> => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // In a real app, this would create a new user
      // For demo, we'll just simulate success
      const newUser = {
        email: _email,
        name: _name,
        role: 'user' as const,
        subscription: 'free' as const,
      };

      localStorage.setItem(authConfig.session.storageKey, JSON.stringify(newUser));
      setState({
        user: newUser,
        isLoading: false,
        isAuthenticated: true,
      });

      return { success: true };
    },
    []
  );

  return {
    ...state,
    login,
    logout,
    signup,
  };
}
