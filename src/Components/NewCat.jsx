// 6. sukuriamas naujo katino komponentas ir jam perduodama vieno katino charakteristika
function NewCat() {

    return (
        <div className='general-new-cat'>

            <div className='new-cat'>
                <span>New breed: </span>
                <input type="text" placeholder='insert new breed' required/>
            </div>
            <div className='new-cat'>
                <span>New size: </span>
                <input type="text" placeholder='insert new weight' required />
            </div>
            <div className='new-cat'>
                <span>New behaviour: </span>
                <input type="text" placeholder='insert new characteristic' required />
            </div>
            <div className='new-cat'>
                <span>New age: </span>
                <input type="date" required />
            </div>
            <button >Add new cat</button>
        </div>
    );


}export default NewCat;