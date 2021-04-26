import { FaArrowLeft } from 'react-icons/fa';

import c from '../utils/c';

interface GoBackProps {
  onGoBack: () => void;
  className?: string;
}

const GoBack: React.FC<GoBackProps> = ({ onGoBack, className }) => {
  return (
    <button
      className={c(
        'rounded-full px-5 py-3 bg-gradient-to-r from-purple-700 to-blue-400 flex items-center text-gray-100',
        className,
      )}
      onClick={onGoBack}
    >
      <FaArrowLeft className="mr-2" />
      GoBack
    </button>
  );
};

GoBack.defaultProps = {
  onGoBack: () => {},
};

export default GoBack;
