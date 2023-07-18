import { Form  } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

function NewUser() {
    return (
        <form method="post" action="/members">
            <input type="text" name="last_name" />
            <input type="text" name="first_name" />
            <input type="radio" name="position" />
            <input type="email" name="email" />
        </form>
    )
}

const AddUserForm = () => {
    const [lastName, SetlastName] = useState('')
    const [firstName, SetfirstName] = useState('')
    const [position, SetPosition] = useState('')
    const [email, SetEmail] = useState('')

    const addUser = () => {
        const response= axios.post.post('/api/users/')
    }
    return (
        <div id="add-comment-form">
            <h3>Add a User</h3>
            <label>
                Last Name:
                <input 
                    value={lastName}
                    onChange={e => SetlastName(e.target.value)}
                    type="text" />
            </label>
            <label>
                First Name:
                <input 
                    value={firstName}
                    onChange={e => SetfirstName(e.target.value)}
                    type="text" />
            </label>
            <label>
                Position:
                <input 
                    type="radio" 
                    value={"Position"}
                    onChange={e => SetPosition(e.target.value) } 
                />
                <input type="radio" value={"Student"} />
                <input type="radio" value={"Intern"} />
            </label>
            <label>
                Email:
                <input 
                    value={"Email"}
                    onChange={e => SetEmail(e.target.value) } 
                    type="email" />
            </label>
            <button>Add User</button>
        </div>
    );
}
 
export default AddUserForm;