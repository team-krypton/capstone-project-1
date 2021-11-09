import Google from './Google';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton'

const Main = ({searchTerm, setSearchTerm}) => {
    return (
        <main>
            <div className="hero-container">
            {searchTerm ? <p className="text-result">{searchTerm}</p> : <Google/>}
            </div>
            <SearchBar query={searchTerm} setQuery={setSearchTerm}/>
            <SearchButton />
            <p className="gogf">Google offered in:  <a href="" className="lang">Hausa</a> &nbsp;
                <a href="" className="lang">Igbo</a> &nbsp;
                <a href="" className="lang">Èdè Yorùbá</a> &nbsp;
                <a href="" className="lang">Nigerian Pidgin</a>
            </p>
        </main>
    )
}

export default Main