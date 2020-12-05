import React, {useState} from 'react';
import {Form, Input, Select, Button} from '../../styled/style';
import { useForm } from 'react-hook-form';
//import {useHistory} from 'react-router-dom';
import { create } from '../../utils/artikkelService';


const NyArtikkelForm = () => {
    const [closeBtnState, setCloseBtnState] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const { register, handleSubmit, formState} = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async (credentials) => {
        const { data } = await create(credentials);
        if (!data.success) {
          setError(data.message);
          console.log(error)
        } else {
          const artikkel = data?.user;
          setSuccess(true);
        }
      };

    return(
        <div>
            {/*<div className="nykategori">
                <div className="nykategori-innhold">
                    <Form>
                        <span >&times;</span>
                        <label>Ny Kategori</label>
                        <br/>
                        <Input id="newCategory"></Input>
                        <br/>
                        <Button type="button" >CREATE</Button>
                    </Form>
                </div>
            </div>*/}
            <Form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <label id="titleLabel" htmlFor="title">Tittel*</label>
                <br/>
                <Input 
                    id="title"
                    type="text"
                    name="title"
                    ref={register({
                        required: true,
                    })}
                />
                <br/>
                <label id="ingressLabel" htmlFor="ingress">Ingress*</label>
                <br/>
                <Input 
                    id="ingress"
                    type="text"
                    name="ingress"
                    ref={register({
                        required: true,
                    })}
                />
                <br/>
                <label id="contentLabel" htmlFor="content">Innhold*</label>
                <br/>
                <Input 
                    id="content"
                    type="textarea"
                    name="content"
                    ref={register({
                        required: true,
                    })}
                />
                <br/>
                <label htmlFor="hiddenCheckbox">Innholdet skal kun være synlig for innloggede brukere:</label>
                <Input 
                    style={{zoom: 1.25, transform: "scale(1.25)", width: "auto", marginLeft: "5px"}}
                    type="checkbox"
                    id="hiddenCheckbox"
                    name="hiddenCheckbox"
                    ref={register({
                        required: true,
                    })}
                />
                <br/>
                <p style={{color: "red", fontStyle: "italic", fontSize: "10px"}} id="filled">* må være fyllt inn</p>
                <label>Last opp artikkelbilde: </label>
                <Input style={{width: "auto"}} type="file" id="bilde" accept=".jpeg,.jpg,.png" />
                <br/>
                <label htmlFor="category">Kategori</label>
                <br/>
                <Select 
                    id="category"
                    name="category"
                    ref={register({
                        required: true,
                    })}
                >
                    <option value="Bad">Bad</option>
                    <option value="Kjøkken">Kjøkken</option>
                </Select>
                <Button type="button" style={{backgroundColor: "green"}} >LAG NY KATEGORI</Button>
                <br/>
                <br/>
                <label htmlFor="author">Forfatternavn</label>
                <br/>
                <Select
                    id="author"
                    name="author"
                    ref={register({
                        required: true,
                    })}
                    >
                    <option value="hello">Hello</option>
                    <option value="hello2">Hello2</option>
                    <option value="hello3">Hello3</option>
                </Select>
                <br/>
                <br/>
                <Button isLoading={formState.isSubmitting} type="submit">CREATE</Button>
            </Form>
        </div>
    )
}

export default NyArtikkelForm