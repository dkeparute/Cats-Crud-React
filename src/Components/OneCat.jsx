// 5. sukuriamas vieno gyvuno komponentas kuriam perduodamas propsas is catslist komponento
// cia parasoma vieno katino charakteristika
function OneCat({ oneCat, modal }) {

    // 22. perduodam modal funkcija
    const showEdit = () => {
        // 27 i modal idedam kate
        modal(oneCat);
    }

    return (
        <div className='cat-design'>
            <span>Breed: </span>
            <div className='each-cat' >{oneCat.breed}</div>
            <span>Size: </span>
            <div className='each-cat'>{oneCat.size}</div>
            <span>Behaviour: </span>
            <div className='each-cat'>{oneCat.behaviour}</div>
            <span>Age: </span>
            <div className='each-cat'>{oneCat.age.slice(0,10)}</div>
            {/*16. sukuriamas mygtukas */}
            {/* 21. sukuriam onclick  */}
            <button onClick={showEdit} >Edit</button>
        </div>
    );

}
export default OneCat;