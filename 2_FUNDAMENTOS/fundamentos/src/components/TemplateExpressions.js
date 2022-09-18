const TemplateExpressions = () => {
    const name = "Melo";
    const data = {
        age: 31,
        job: "developer"
    }
    return (
        <div className="content">
            <h2>Hello my name is {name}</h2>
            <p>My job is {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log(data.age)}</p>
        </div>
    )
}

export default TemplateExpressions;