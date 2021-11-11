import OneCat from "./OneCat";

// 3. sukuriamas katinu saraso komponentas kuriame perkeliamas propsas is App ir cia sumepinam viska su vienu katinu
function CatsList({allCats, modal}) {

    return (
        <div className='cats-list'>
            {allCats.map(oneCat => <OneCat key={oneCat.id} modal={modal} oneCat={oneCat}></OneCat>)}
        </div>
    );

}
export default CatsList;