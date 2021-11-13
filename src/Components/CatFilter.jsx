// 40. sukuriamas filtro komponentas ir perduodamas i APP;

function CatFilter() {


    return (
        <div className='general-filter'>
            <div className='each-filter'>
                <span>Cat filter by breed: </span>
                {/* 41 sukuriamas select */}
                <select>
                    <option value="">Select cat</option>
                </select>
            </div>

        </div>
    );
}
export default CatFilter;