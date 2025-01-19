import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import { ArrowLeft, Mail, Phone, Globe, Building2 } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { users } = useUsers();
  
  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl text-red-500">User not found</h1>
          <button
            onClick={() => navigate('/')}
            className="mt-4 flex items-center justify-center gap-2 text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <ThemeToggle />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{user.name}</h1>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Mail className="w-5 h-5" />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Phone className="w-5 h-5" />
              <span>{user.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Globe className="w-5 h-5" />
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                {user.website}
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Building2 className="w-5 h-5" />
              <div>
                <p className="font-semibold">{user.company.name}</p>
                <p className="text-sm italic">{user.company.catchPhrase}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Address</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {user.address.street}, {user.address.suite}<br />
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;