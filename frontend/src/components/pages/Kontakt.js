import React from 'react'
import {Form, Input, Button} from '../../styled/style';
import Axios from 'axios';
import { useAuthContext } from '../../context/AuthProvider.jsx';

const Kontakt = () => {

    const { user } = useAuthContext();
    if(user !== null){
        document.getElementById("name").value = user["name"];
        document.getElementById("mail").value = user["email"];
    }

    function submitClicked(){
        Axios.post('http://localhost:5000/api/v1/contact', {
            name: document.getElementById("name").value,
            email: document.getElementById("mail").value,
            question: document.getElementById("question").value
        })
        .then(
            document.getElementById("name").value = "",
            document.getElementById("mail").value = "",
            document.getElementById("question").value = ""
        )
        .catch(res => console.log(res));
    }

        return (
            <div>
                <header><h1>Kontakt oss</h1></header>
                <main>
                    <Form>
                        <label>
                            Ditt navn*:
                        </label>
                        <br/>
                        <Input type="text" id="name"></Input>
                        <br/>
                        <label>
                            Din E-post*:
                        </label>
                        <br/>
                        <Input type="email" id="mail"></Input>
                        <br/>
                        <label>
                            Ditt spørsmål*:
                        </label>
                        <br/>
                        <Input type="text" id="question"></Input>
                        <br/>
                        <Button type="button" onClick={submitClicked}>Send</Button>
                    </Form>
                    <p>* = påkrevd</p>
                </main>
            </div>
        )
    
}

export default Kontakt
