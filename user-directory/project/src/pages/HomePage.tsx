import React from 'react';
import { useUsers } from '../context/UserContext';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import SortButton from '../components/SortButton';
import Pagination from '../components/Pagination';
import ThemeToggle from '../components/ThemeToggle';
import { Loader } from 'lucide-react';

const USERS_PER_PAGE = 6;

const HomePage: React.FC = () => {
  const { users, loading, error, searchTerm, sortOrder, currentPage } = useUsers();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error: {error}
      </div>
    );
  }

  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Directory</h1>
          <ThemeToggle />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div className="w-full sm:w-96">
            <SearchBar />
          </div>
          <SortButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {filteredUsers.length > USERS_PER_PAGE && (
          <Pagination totalPages={totalPages} />
        )}
      </div>
    </div>
  );
};

export default HomePage;