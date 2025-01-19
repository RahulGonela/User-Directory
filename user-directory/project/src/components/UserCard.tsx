import React from 'react';
import { User } from '../types/user';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link
      to={`/user/${user.id}`}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{user.name}</h2>
      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
        <Mail className="w-4 h-4 mr-2" />
        <span>{user.email}</span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-300">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{user.address.city}</span>
      </div>
    </Link>
  );
};

export default UserCard;