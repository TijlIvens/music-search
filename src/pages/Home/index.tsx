import { useState } from 'react';

import Body from '../../components/Body';
import Page from '../../components/Page';

import SearchHeader from './partials/SearchHeader';
import SongsList from './partials/SongsList';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Page>
      <SearchHeader searchText={searchText} setSearchText={setSearchText} />
      <Body>
        <SongsList searchText={searchText} />
      </Body>
    </Page>
  );
};

export default Home;
