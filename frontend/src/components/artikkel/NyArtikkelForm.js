/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Input, Select, Button } from '../../styled/style';
import { useForm } from 'react-hook-form';
//import {useHistory} from 'react-router-dom';
import { create } from '../../utils/artikkelService';

const NyArtikkelForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [titleIsFilled, setTitleIsFilled] = useState('red');
  const [ingressIsFilled, setIngressIsFilled] = useState('red');
  const [contentIsFilled, setContentIsFilled] = useState('red');
  const [submitButtonActive, setSubmitButtonActive] = useState(false);
  const [submitButtonColor, setSubmitButtonColor] = useState('grey');

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (credentials) => {
    console.log(credentials);
    const { data } = await create(credentials);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
    }
  };

  function handleValidation() {
    let isValid = true;

    if (!document.getElementById('title').value) {
      isValid = false;
      setTitleIsFilled('red');
      document.getElementById('titleLabel').innerHTML = 'Tittel*';
    } else {
      setTitleIsFilled('black');
      document.getElementById('titleLabel').innerHTML = 'Tittel';
    }

    if (!document.getElementById('ingress').value) {
      isValid = false;
      setIngressIsFilled('red');
      document.getElementById('ingressLabel').innerHTML = 'Ingress*';
    } else {
      setIngressIsFilled('black');
      document.getElementById('ingressLabel').innerHTML = 'Ingress';
    }

    if (!document.getElementById('content').value) {
      isValid = false;
      setContentIsFilled('red');
      document.getElementById('contentLabel').innerHTML = 'Innhold*';
    } else {
      setContentIsFilled('black');
      document.getElementById('contentLabel').innerHTML = 'Innhold';
    }

    if (isValid) {
      setSubmitButtonColor('green');
      setSubmitButtonActive(false);
      document.getElementById('filled').innerHTML = '';
    } else {
      setSubmitButtonColor('grey');
      setSubmitButtonActive(true);
      document.getElementById('filled').innerHTML = '* må være fyllt inn';
    }
  }

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
        <label id="titleLabel" htmlFor="title" style={{ color: titleIsFilled }}>
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
          onChange={handleValidation}
          style={{ borderColor: titleIsFilled }}
        />
        <br />
        <label
          id="ingressLabel"
          htmlFor="ingress"
          style={{ color: ingressIsFilled }}
        >
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
          onChange={handleValidation}
          style={{ borderColor: ingressIsFilled }}
        />
        <br />
        <label
          id="contentLabel"
          htmlFor="content"
          style={{ color: contentIsFilled }}
        >
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
          onChange={handleValidation}
          style={{ borderColor: contentIsFilled }}
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
        <Button
          style={{ backgroundColor: submitButtonColor }}
          disabled={submitButtonActive}
          isLoading={formState.isSubmitting}
          type="submit"
        >
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

    
*/
