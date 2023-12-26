// import thư viện
import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css"

// import module
import { wrapper as PopperWrapper } from "@/components/Popper";
import styles from "./Search.module.scss";
import AccountItem from "@/components/AccountItem";
import useDebounce from "@/hooks/useDebounce";
import * as searchServices from "@/apiServices/searchServices";

const cx  = classNames.bind(styles);
function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef();

    useEffect(() =>{
        if(!debounce.trim()){ setSearchResult([]); return}
        setLoading(true);

        // goi api
        const fectAPI = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
        }
        fectAPI();
    }, [debounce])

    const handleClear = () =>{
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }
    return ( 
    <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        // visible
        interactive
        render={(attrs) =>(
                <div className={cx('search-result')} tabIndex="-1" {...attrs}> 
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                        Account
                        </h4>
                        
                        {searchResult.map((result )=>(
                            <AccountItem key={result.id} data={result}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}

    >
        <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and video" spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className= {cx("clear-btn")} 
                        onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
            
            {loading && <FontAwesomeIcon className= {cx("faSpinner")} icon={faSpinner} />}
            

            <button className= {cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </HeadlessTippy>
     );
}

export default Search;