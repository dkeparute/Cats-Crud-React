// 5. sukuriamas vieno gyvuno komponentas kuriam perduodamas propsas is catslist komponento
// cia parasoma vieno katino charakteristika
function OneCat({oneCat}) {

    return (
        <div className='cat-design'>
            <span>Breed: </span>
            <div className='each-cat'>{oneCat.breed}</div>
            <span>Size: </span>
            <div  className='each-cat'>{oneCat.size}</div>
            <span>Behaviour: </span>
            <div  className='each-cat'>{oneCat.behaviour}</div>
            <span>Age: </span>
            <div  className='each-cat'>{oneCat.age}</div>
        </div>
    );

}
export default OneCat;