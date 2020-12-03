import React from 'react'
import { useAuthContext } from '../../context/AuthProvider';
import {SlettKnapp, RedigerKnapp} from '../../styled/style';
import Axios from 'axios';

function deleteArticle(){
    console.log("Delete was clicked")
    Axios.delete('http://localhost:5000/api/v1/articles/' + window.location.href.split("/")[4].toString())
    .then(
        window.location.href = "http://localhost:3000/fagartikler"
    )
    .catch(error => alert("Artikklen ble ikke slettet. \n Error: " + {error}))
}

const DeleteEditKnapp = (props) => {
    const { isLoggedIn, isAdmin } = useAuthContext();
    return (
        <div>
            {isLoggedIn && isAdmin && (
                <div>
                <SlettKnapp type="button" onClick={deleteArticle}>SLETT</SlettKnapp>
                <RedigerKnapp type="button" onClick={props.edit}>REDIGER</RedigerKnapp>
                </div>
            )}
        </div>
    )
}

export default DeleteEditKnapp