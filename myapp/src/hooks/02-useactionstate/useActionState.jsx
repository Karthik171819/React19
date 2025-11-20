export default function UseActionState(){

 async   function submitForm(previousState, formData){
    await new Promise((res, rej) => setTimeout(res, 5000));
    if(formData.get("username") == "karthik" && formData.get("Password") == "1234"){
        return "Login Success";
    }

    return "invalid credentials";
}

const [state, formAction] = useActionState(submitForm, "Fill the form fields")

    return <div>
        <h1>Use Action State</h1>
        <form action={formAction}>
            <div style={{display:"flex", flexDirection:"column"}}></div>
            <label htmlFor="">Username
                <input type='text' name='username'  id=''/>
            </label>

             <label htmlFor="">Password
                <input type='text' name="Password"  id=''/>
            </label>

            <button type='submit'> Submit</button>
        </form>
        <p>{state}</p>
    </div>
}