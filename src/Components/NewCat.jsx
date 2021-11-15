import { useState } from "react";

// 6. sukuriamas naujo katino komponentas ir jam perduodama vieno katino charakteristika
function NewCat({ create }) {

    // 7 busimi nauji katinai
    const [input, setInput] = useState({
        breed: '',
        size: '',
        behaviour: '',
        age: ''
    })


    //8. inputu kontroliavimas
    const control = (event, what) => {
        const copyInput = { ...input };
        copyInput[what] = event.target.value;
        setInput(copyInput);

    }
    // 12 handlinam create
    const handlecreate = () => {
        create(input);
        // resetina paieskos info
        setInput({
            breed: '',
            size: '',
            behaviour: '',
            age: ''
        })
    }


    return (
        <div className='general-new-cat'>

            <div className='new-cat'>
                <span>New breed: </span>
                <input type="text" placeholder='insert new breed' onChange={event => control(event, 'breed')} value={input.breed} required />
            </div>
            <div className='new-cat'>
                <span>New size: </span>
                <input type="text" placeholder='insert new weight' onChange={event => control(event, 'size')} value={input.size} required />
            </div>
            <div className='new-cat'>
                <span>New mood: </span>
                <input type="text" placeholder='insert new characteristic' onChange={event => control(event, 'behaviour')} value={input.behaviour} required />
            </div>
            <div className='new-cat'>
                <span>New age: </span>
                <input type="date" onChange={event => control(event, 'age')} value={input.age} required />
            </div>
            <div>
                <button onClick={handlecreate} >Add cat</button>
            </div>
        </div>

    );


} export default NewCat;