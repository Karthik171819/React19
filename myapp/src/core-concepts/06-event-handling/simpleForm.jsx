export default function SimpleForm(){
    
    const handlingSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)

    }
    return<>
        <form onSubmit={ handlingSubmit }>
            <input type='text' name="name" placeholder="Enter Name"/>
            <input type='text' name="email" placeholder="Enter Your Email"/><br/>
            <button className="bg-color" type="submit">submit</button>
        </form>
    </>
}