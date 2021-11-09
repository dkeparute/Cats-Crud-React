import OneCat from "./OneCat";

// 5. Sukuriamas visu kaciu komponentas ir tuo paciu dar naujas propsas
function CatsList({catsList}) {

    return (
        <div className='cats-list'>
            {catsList.map(oneCat => <OneCat></OneCat>)}
        </div>
    );

}
export default CatsList;