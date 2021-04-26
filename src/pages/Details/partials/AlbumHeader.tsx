import { Result } from '../../../hooks/api/searchType';

interface AlbumHeaderProps {
  result?: Result;
}

const AlbumHeader: React.FC<AlbumHeaderProps> = ({ result }) => {
  return (
    <div className="w-full bg-gradient-to-b from-green-700 to-blue-400 flex items-center flex-col p-7">
      <img src={result?.artworkUrl100} alt="album cover" className="h-56" />
      <h1 className="text-white text-3xl mt-5 text-center">
        {result?.trackName || result?.collectionName}
      </h1>
      <p className="text-gray-300 text-xl text-center">
        {result?.artistName || result?.collectionArtistName}
      </p>
    </div>
  );
};

export default AlbumHeader;
