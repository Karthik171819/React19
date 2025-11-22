import { useActionState } from "react";

export default function UseActionState() {

    async function submitForm(previousState, formData) {
        await new Promise((res) => setTimeout(res, 1000));

        //already login check
        if (previousState == "Login Success"){
            return "You are already login";
        }
        if (
            formData.get("username") === "karthik" &&
            formData.get("password") === "1234"
            
        ) {
            return "Login Success";
        } else {

        return "invalid credentials";
    }

}

    const [state, formAction, isPending] = useActionState(submitForm, "Fill the form fields");

    return (
        <div>
            <h1>Use Action State</h1>
            <form action={formAction}>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label>
                        Username
                        <input type="text" name="username" />
                    </label>

                    <label>
                        Password
                        <input type="password" name="password"  />
                    </label>
                </div>

                <button type="submit" style={{marginTop:"10px "}}>Submit</button>
            </form>

            <p>{isPending ? "Please wait Loading...it may take upto few seconds..." : state}</p>
        </div>
    );
}
