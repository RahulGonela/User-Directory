import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/user';

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  sortOrder: 'asc' | 'desc';
  currentPage: number;
  setSearchTerm: (term: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setCurrentPage: (page: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        searchTerm,
        sortOrder,
        currentPage,
        setSearchTerm,
        setSortOrder,
        setCurrentPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};