import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchHeaderProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-700 to-blue-400 flex items-center flex-col p-7">
      <h1 className="text-gray-100 text-5xl">Itunes Search</h1>
      <div className="m-7 w-full max-w-2xl">
        <label htmlFor="search" className="block font-medium text-gray-200">
          Search
        </label>
        <div className="mt-1 relative flex">
          <input
            type="text"
            id="search"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            placeholder="Search music"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText === '' ? (
            <FaSearch className="absolute h-full top-0 right-0 mr-3 text-sm text-gray-400" />
          ) : (
            <FaTimes
              onClick={() => {
                setSearchText('');
              }}
              className="absolute h-full top-0 right-0 mr-3 text-sm text-gray-400 hover:text-gray-600 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
