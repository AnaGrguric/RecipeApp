function SearchBar(props){
    return(
        <div className="search-bar">
            <input placeholder="Search" onChange={props.search}></input>
        </div>
    );
}

export default SearchBar;