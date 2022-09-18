const Events = () => {
    const handleMyEvent = (e) =>{
        console.log(e);    
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Render this!</h1>
        }else{
            return <h1>Render else!</h1>

        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here!</button>
            </div>
            <div>
                <button onClick={()=> console.log("inline function!")}>Click here 2!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}

        </div>
       
    )
}

export default Events;