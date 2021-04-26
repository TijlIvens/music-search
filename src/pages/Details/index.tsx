import { useHistory, useParams } from 'react-router';

import GoBack from '../../components/GoBack';
import Page from '../../components/Page';

import useContentDetails from '../../hooks/api/contentDetails';

import AlbumHeader from './partials/AlbumHeader';
import DetailsSkeleton from './partials/DetailsSekelton';
import Info from './partials/Info';

interface ParamTypes {
  id: string;
}

const Details = () => {
  const { id } = useParams<ParamTypes>();
  const history = useHistory();

  const { result, isLoading } = useContentDetails(id);

  if (!isLoading && !result) {
    return (
      <Page>
        <div>Nothing found</div>
        <GoBack onGoBack={() => history.push('/')} className="mt-3" />
      </Page>
    );
  }

  return (
    <DetailsSkeleton isLoading={isLoading}>
      <AlbumHeader result={result} />
      <Info result={result} />
    </DetailsSkeleton>
  );
};

export default Details;
