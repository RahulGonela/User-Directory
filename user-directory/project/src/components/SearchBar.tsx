import React from 'react';
import { Search } from 'lucide-react';
import { useUsers } from '../context/UserContext';

const SearchBar: React.FC = () => {
  const { setSearchTerm } = useUsers();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
};

export default SearchBar;