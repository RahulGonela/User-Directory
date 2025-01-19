import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useUsers } from '../context/UserContext';

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const { currentPage, setCurrentPage } = useUsers();

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <span className="text-gray-700 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;