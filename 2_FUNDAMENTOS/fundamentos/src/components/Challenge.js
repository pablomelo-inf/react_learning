const Challenge = () => {
    const number1 = 3;
    const number2 = 7;

    const handleSumNumbers = () =>{
        console.log(number1 + number2);
    }
    
    return (
        <div className="content">
            <p>n1 : {number1}</p>
            <p>n2 : {number2}</p>
            <p>
                <button onClick={handleSumNumbers}>Sum numbers</button>
            </p>
        </div>
    );
}
export default Challenge;