import clsx from 'clsx';
import { FunctionComponent } from 'react';

interface IToggleProps {
  enabled: boolean;
  onToggle: () => void;
}
const Toggle: FunctionComponent<IToggleProps> = ({ enabled, onToggle }) => {
  return (
    <div className="flex flex-row-reverse">
      <button
        onClick={onToggle}
        type="button"
        className={clsx(
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          { 'bg-green-600': enabled },
          { 'bg-red-600': !enabled }
        )}
        role="switch"
        aria-checked={enabled}
      >
        <span
          aria-hidden="true"
          className={clsx(
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            { 'translate-x-5': enabled },
            { 'translate-x-0': !enabled }
          )}
        ></span>
      </button>
      <b>Favorite: </b>
    </div>
  );
};

export default Toggle;
