import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useUsers } from '../context/UserContext';

const SortButton: React.FC = () => {
  const { sortOrder, setSortOrder } = useUsers();

  return (
    <button
      onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
    >
      <ArrowUpDown className="w-4 h-4 mr-2" />
      Sort {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}
    </button>
  );
};

export default SortButton;