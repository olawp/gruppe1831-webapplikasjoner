/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button } from '../../styled/style';
import { useForm } from 'react-hook-form';
//import {useHistory} from 'react-router-dom';
import { create, list } from '../../utils/artikkelService';

const NyArtikkelForm = () => {
  const [closeBtnState, setCloseBtnState] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [categories, setCategories] = useState(null);

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (credentials) => {
    const { data } = await create(credentials);
    if (!data.success) {
      setError(data.message);
    } else {
      const artikkel = data?.user;
      setSuccess(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list('/articles'); // Endre url senere
      if (!data.success) {
        setError(error);
      } else {
        setCategories(data.data);
        setError(null);
      }
    };
    fetchData();
  }, []);

  return (
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
        <label id="titleLabel" htmlFor="title">
          Tittel*
        </label>
        <br />
        <Input
          id="title"
          type="text"
          name="title"
          ref={register({
            required: true,
          })}
        />
        <br />
        <label id="ingressLabel" htmlFor="ingress">
          Ingress*
        </label>
        <br />
        <Input
          id="ingress"
          type="text"
          name="ingress"
          ref={register({
            required: true,
          })}
        />
        <br />
        <label id="contentLabel" htmlFor="content">
          Innhold*
        </label>
        <br />
        <Input
          id="content"
          type="textarea"
          name="content"
          ref={register({
            required: `${true} Dette feltet er påkrevd`,
          })}
        />
        <br />
        <label htmlFor="hidden">Kun være synlig for innloggede brukere:</label>
        <Select
          id="hidden"
          name="hidden"
          ref={register({
            required: true,
          })}
        >
          <option value="false">Nei</option>
          <option value="true">Ja</option>
        </Select>
        <br />
        <p
          style={{ color: 'red', fontStyle: 'italic', fontSize: '10px' }}
          id="filled"
        >
          * må være fyllt inn
        </p>
        <label>Last opp artikkelbilde: </label>
        <Input
          style={{ width: 'auto' }}
          type="file"
          id="bilde"
          accept=".jpeg,.jpg,.png"
        />
        <br />
        <label htmlFor="category">Kategori</label>
        <br />
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
        <Button type="button" style={{ backgroundColor: 'green' }}>
          LAG NY KATEGORI
        </Button>
        <br />
        <br />
        <label htmlFor="author">Forfatternavn</label>
        <br />
        <Select
          id="author"
          name="author"
          ref={register({
            required: true,
          })}
        >
          <option value="Lars Larsen">Lars Larsen</option>
          <option value="Gunn Gundersen">Gunn Gundersen</option>
          <option value="Simen Simensen">Simen Simensen</option>
        </Select>
        <br />
        <br />
        <Button isLoading={formState.isSubmitting} type="submit">
          CREATE
        </Button>
      </Form>
    </div>
  );
};

export default NyArtikkelForm;

/*
    function closeCategory(){
        state.display("none");
    }

    function openCategory(){
        state.display("none");
    }


    function lagNyKategori(){
        let newCategory = document.getElementById("newCategory").value;
        
        Axios.post('http://localhost:5000/api/v1/categories', {
            category: newCategory
        })
        .then(
            document.getElementById("newCategory").value = "",
            closeCategory
        )
        .catch(error => alert("Kategorien ble ikke opprettet. \n Error: " + {error}));
    }

    function handleValidation(){
        let formIsValid = true;

        if(!document.getElementById("title").value){
           formIsValid = false;
           state.titleIsFilled("red")
           document.getElementById("titleLabel").innerHTML = "Tittel*";
        }
        else{
            this.setState({titleIsFilled: "black"});
            document.getElementById("titleLabel").innerHTML = "Tittel";
        }

        if(!document.getElementById("ingress").value){
            formIsValid = false;
            this.setState({ingressIsFilled: "red"});
            document.getElementById("ingressLabel").innerHTML = "Ingress*";
        }
        else{
            this.setState({ingressIsFilled: "black"});
            document.getElementById("ingressLabel").innerHTML = "Ingress";
        }

        if(!document.getElementById("content").value){
            formIsValid = false;
            this.setState({contentIsFilled: "red"});
            document.getElementById("contentLabel").innerHTML = "Innhold*";
        }
        else{
            this.setState({contentIsFilled: "black"});
            document.getElementById("contentLabel").innerHTML = "Innhold";
        }


        if(formIsValid){
            this.setState({color: "green", disabled: ""});
            document.getElementById("filled").innerHTML = "";
        }
        else{
            this.setState({color: "grey", disabled: "true"});
            document.getElementById("filled").innerHTML = "* må være fyllt inn";
        }
        
   }
*/
