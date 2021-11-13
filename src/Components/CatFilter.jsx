// 40. sukuriamas filtro komponentas ir perduodamas i APP;

function CatFilter({breed}) {


    return (
        <div className='general-filter'>
            <div className='each-filter'>
                <span>Cat filter by breed: </span>
                {/* 41 sukuriamas select */}
                <select>
                    {/* 44. breed SUMEPINA */}
                    {breed.map((b) => <option key={b.breed} value={b.breed}>{b.breed}</option>)}
                    <option value="">Select cat</option>
                </select>
            </div>

        </div>
    );
}
export default CatFilter;