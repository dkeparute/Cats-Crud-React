// 40. sukuriamas filtro komponentas ir perduodamas i APP;

import { useState } from "react";

function CatFilter({ breed, setFilter, reset, setSearch, setSort }) {

    // 50. 
    const [filterValue, setFilterValue] = useState('');
    const selectFilter = e => {
        setFilterValue(e.target.value);
        setFilter(e.target.value);
    }


    // 57. sukuriam set search kuri perduodam i APP
    const [searchValue, setSearchValue] = useState('');
    const selectSearch = e => {
        setSearchValue(e.target.value);
        setSearch(e.target.value);
    }

    // 61.
    const [sortValue, setSortValue] = useState('');
    const selectSort = e => {
        setSortValue(e.target.value);
        // 63.
        setSort(e.target.value);
    }


    // 54.
    const resetHandler = () => {
        reset();
        setFilterValue('');

    }

    return (
        <div className='general-filter'>
            <div className='each-filter'>
                <span>Cat filter by breed: </span>
                {/* 41 sukuriamas select */}
                {/* 49. onChange sukuriamas hookas ir value */}
                <select onChange={selectFilter} value={filterValue}>
                    {/* 44. breed SUMEPINA */}
                    <option value="">Select cat:</option>
                    {breed.map(b => <option key={b.breed} value={b.breed}>{b.breed}</option>)}
                </select>
            </div>
            {/* 56. sukuriamas SEARCH su input */}
            <div className='each-filter'>
                <span> Cat search by behaviour: </span>
                <input type="text" placeholder='insert any letter' required value={searchValue} onChange={selectSearch} />
            </div>
            {/* 60. sukuriamas RUSIAVIMAS */}
            <div className='each-filter'>
                <span>Cats sort: </span>
                <select onChange={selectSort} value={sortValue}>
                    <option value="">Sort by:</option>
                    <option value="breed_Asc">Sort by breed Asc:</option>
                    <option value="breed_Desc">Sort by breed Desc</option>
                    <option value="size_Asc">Sort by size Asc:</option>
                    <option value="size_Desc">Sort by size Desc</option>
                    <option value="behaviour_Asc">Sort by behaviour Asc:</option>
                    <option value="behaviour_Desc">Sort by behaviou Desc</option>
                    <option value="age_Asc">Sort by age Asc:</option>
                    <option value="age_Desc">Sort by age Desc</option>
                </select>
            </div>
            {/* 51. sukuriamas RESET mygtukas ir jo funkcionalumas ir jis perduodamas i APP */}
            <div className='each-filter'>
                {/* <button onClick={reset}>Reset</button> */}
                {/* 53. sukuriamas resetHandleris  */}
                <button onClick={resetHandler}>Reset</button>
            </div>

        </div>
    );
}
export default CatFilter;