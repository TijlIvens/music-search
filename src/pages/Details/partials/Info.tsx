import { useHistory } from 'react-router';

import Body from '../../../components/Body';
import GoBack from '../../../components/GoBack';

import { Result } from '../../../hooks/api/searchType';

interface InfoProps {
  result?: Result;
}

const Info: React.FC<InfoProps> = ({ result }) => {
  const history = useHistory();

  return (
    <Body>
      {result?.previewUrl && (
        <div>
          <p className="pb-2 pl-3">Preview:</p>
          <audio controls>
            <source src={result.previewUrl} />
          </audio>
        </div>
      )}
      <GoBack onGoBack={() => history.push('/')} className="mt-3" />
    </Body>
  );
};

export default Info;
