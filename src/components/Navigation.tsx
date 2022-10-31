import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FunctionComponent = () => {
  return (
    <ul>
      <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <Link to="/home">Home</Link>
      </li>
      <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <Link to="/favorites">Favorites</Link>
      </li>
    </ul>
  );
};

export default Navigation;
