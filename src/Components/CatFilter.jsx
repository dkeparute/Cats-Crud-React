// 40. sukuriamas filtro komponentas ir perduodamas i APP;

import { useState } from "react";

function CatFilter({ breed, filter}) {

    // 49. 
    const [filterValue, setFilterValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value);
    }

    return (
        <div className='general-filter'>
            <div className='each-filter'>
                <span>Cat filter by breed: </span>
                {/* 41 sukuriamas select */}
                {/* 48. onChange sukuriamas hookas ir value */}
                <select onChange={selectFilter} value={filterValue}>
                    {/* 44. breed SUMEPINA */}
                    {breed.map(b => <option key={b.breed} value={b.breed}>{b.breed}</option>)}
                    <option value="">Select cat</option>
                </select>
            </div>

        </div>
    );
}
export default CatFilter;