function CatsMessage({msg, showMsg}) {

    return (
        <div className='cats-message' style={{ height: showMsg ? '100px' : '0' }} >
            <span>{msg}</span>
        </div>
    );
}

export default CatsMessage;