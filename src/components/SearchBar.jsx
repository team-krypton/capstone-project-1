
const SearchBar = ({ query, setQuery }) => {
    return (
        
        <div className="search-bar">
            <input class="search-input" type="text" value={query}
            onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
};

export default SearchBar