import useItunesSearch from '../../../hooks/api/search';

interface SongsListProps {
  searchText: string;
}

const SongsList: React.FC<SongsListProps> = ({ searchText }): any => {
  const { results, isLoading } = useItunesSearch(searchText);

  if (searchText === '') {
    return <span className="w-max">Please type in a filter</span>;
  }

  if (isLoading) {
    return <span className="w-max">Searching ...</span>;
  }

  if (results?.length === 0) {
    return <span className="w-max">Nothing was found</span>;
  }

  return (
    <div className="divide-y w-full">
      {results?.map((result) => (
        <div
          className="p-2 flex justify-between w-full"
          key={result.collectionId}
        >
          <div className="flex items-center">
            <img
              className="aspect-w-1 aspect-h-1"
              src={result.artworkUrl60}
              alt={`Album of ${result.artistName}`}
            />

            <div className="p-3 w-48">
              {result.artistName || result.collectionArtistName}
            </div>
            <div>{result.trackName || result.collectionName}</div>
          </div>
          <div className="flex items-center">
            <a
              href={`/details/${result.trackId || result.collectionId}`}
              className="text-blue-500"
            >
              Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongsList;
