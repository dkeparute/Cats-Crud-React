import { useState } from "react";
// 17. Sukuriamas modalas

function CatModal({ showModal, hide }) {

    const [input, setInput] = useState({
        breed: '',
        size: '',
        behaviour: '',
        age: ''
    });

    const control = (event, what) => {
        const copyInput = { ...input };
        copyInput[what] = event.target.value;
        setInput(copyInput);

    }


    return (
        // 19 . modalui priskiriam stiliu su salyga
        // 24. scroll y modalo pozicija ekranw
        <div className='general-modal' style={{ display: showModal ? 'flex' : 'none', top: window.scrollY + 200 + 'px' }}>
            {/* 23. modaliui perduodam info is newcat komponento */}
            <div className='each-module'>
                <span>Edit breed: </span>
                <input type="text" placeholder='insert new breed' onChange={event => control(event, 'breed')} value={input.breed} required />
            </div>
            <div className='each-module'>
                <span>Edit size: </span>
                <input type="text" placeholder='insert new weight' onChange={event => control(event, 'size')} value={input.size} required />
            </div>
            <div className='each-module'>
                <span>Edit behaviour: </span>
                <input type="text" placeholder='insert new characteristic' onChange={event => control(event, 'behaviour')} value={input.behaviour} required />
            </div>
            <div className='each-module'>
                <span>Edit age: </span>
                <input type="date" onChange={event => control(event, 'age')} value={input.age} required />
            </div>
            <button >Save</button>
            {/* 25 darome jog paspaudus mygtuka return dingu modalas perduodam propsa per APP */}
            <button onClick={hide} >Return</button>
            <button >Delete</button>
        </div>
    );

}
export default CatModal;