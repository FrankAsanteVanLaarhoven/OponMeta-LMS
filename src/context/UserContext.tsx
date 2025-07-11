import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  credits: number;
  subscription: {
    plan: 'free' | 'basic' | 'pro' | 'enterprise';
    status: 'active' | 'canceled' | 'past_due' | 'incomplete';
    currentPeriodEnd: string;
    stripeCustomerId?: string;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      marketing: boolean;
    };
  };
  createdAt: string;
  lastLogin: string;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  updatePreferences: (preferences: Partial<User['preferences']>) => Promise<void>;
  refreshUser: () => Promise<void>;
  addCredits: (amount: number) => Promise<void>;
  useCredits: (amount: number) => Promise<boolean>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user data for development
  const mockUser: User = {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    avatar: '/team1.jpg',
    credits: 100,
    subscription: {
      plan: 'pro',
      status: 'active',
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      stripeCustomerId: 'cus_mock123',
    },
    preferences: {
      theme: 'system',
      language: 'en',
      notifications: {
        email: true,
        push: true,
        marketing: false,
      },
    },
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  };

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('oponmeta_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        } else {
          // For demo purposes, auto-login with mock user
          setUser(mockUser);
          localStorage.setItem('oponmeta_user', JSON.stringify(mockUser));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - replace with real API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'demo@example.com' && password === 'demo123') {
        setUser(mockUser);
        localStorage.setItem('oponmeta_user', JSON.stringify(mockUser));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Mock signup - replace with real API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        ...mockUser,
        id: Date.now().toString(),
        email,
        name,
        credits: 50, // Free credits for new users
        subscription: {
          plan: 'free',
          status: 'active',
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        },
        createdAt: new Date().toISOString(),
      };
      
      setUser(newUser);
      localStorage.setItem('oponmeta_user', JSON.stringify(newUser));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('oponmeta_user');
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) throw new Error('User not authenticated');
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('oponmeta_user', JSON.stringify(updatedUser));
  };

  const updatePreferences = async (preferences: Partial<User['preferences']>) => {
    if (!user) throw new Error('User not authenticated');
    
    const updatedUser = {
      ...user,
      preferences: { ...user.preferences, ...preferences }
    };
    setUser(updatedUser);
    localStorage.setItem('oponmeta_user', JSON.stringify(updatedUser));
  };

  const refreshUser = async () => {
    // Refresh user data from server
    // This would typically sync with Stripe and other services
    if (user) {
      // Mock refresh
      await new Promise(resolve => setTimeout(resolve, 500));
      // In real implementation, fetch latest user data from API
    }
  };

  const addCredits = async (amount: number) => {
    if (!user) throw new Error('User not authenticated');
    
    const updatedUser = { ...user, credits: user.credits + amount };
    setUser(updatedUser);
    localStorage.setItem('oponmeta_user', JSON.stringify(updatedUser));
  };

  const useCredits = async (amount: number): Promise<boolean> => {
    if (!user) throw new Error('User not authenticated');
    
    if (user.credits < amount) {
      return false;
    }
    
    const updatedUser = { ...user, credits: user.credits - amount };
    setUser(updatedUser);
    localStorage.setItem('oponmeta_user', JSON.stringify(updatedUser));
    return true;
  };

  const value: UserContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateProfile,
    updatePreferences,
    refreshUser,
    addCredits,
    useCredits,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 