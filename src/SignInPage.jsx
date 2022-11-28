import { useState } from "react"

export default function SignInPage({setUser}) {
    
    const [username, setUsername] = useState(null);

    const handleInput = (evt) => {
        setUsername(evt.target.value);
    };

    const updateUsername = (evt) => {
        evt.preventDefault();
        setUser(username);
    }



    return(
        <div>
            <h1>Sign In Page</h1>
            <div>
                <form onSubmit = {updateUsername}>
                    <lable>Username:</lable>
                    <input type = 'text' name = "username" onChange={handleInput} />
                    <button type = "submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}