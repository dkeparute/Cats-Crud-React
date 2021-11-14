// 40. sukuriamas filtro komponentas ir perduodamas i APP;

import { useState } from "react";

function CatFilter({ breed, setFilter, reset }) {

    // 50. 
    const [filterValue, setFilterValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        setFilter(e.target.value);
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
                    <option value="">Select cat</option>
                    {breed.map(b => <option key={b.breed} value={b.breed}>{b.breed}</option>)}
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