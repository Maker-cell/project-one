
interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search users by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className=" w-sm md:w-lg p-2 h-9 border border-gray-300 rounded-3xl
       focus:outline-none focus:ring-1 focus:ring-gray-300 hover:border-gray-400"
    />
  )
};
export default SearchBar;