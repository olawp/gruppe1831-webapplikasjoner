/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen skriver modalen for å lage nye kategorier
 * @exports CategoryModal
 */

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button } from '../../styled/style';
import { create } from '../../utils/categoryService';

/**
 * @desc Refererer til https://react-hook-form.com/api/ for dokumentasjon av register, handleSubmit og formState
 * @param {*} props Er informasjon og forelder's funksjoner som blir sendt med fra filen (her: Artikkel.js) som bruker CategoryModal.js
 * @returns Skriver ut modalen for å opprette en kategori
 */
const CategoryModal = (props) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  /**
   * @function onSubmit Sender inn kategorien til databasen
   * @param {*} category Kategorien som skal bli sendt inn
   * @inner props.updateCategory Oppdaterer listen med kategorier til å inkludere den nye kategorien. props.close Lukker modalen.
   * @const data refererer til CategoryService.js for en beskrivelse
   */
  const onSubmit = async (category) => {
    const { data } = await create(category);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      document.getElementById('category').value = '';
      props.updateCategory();
      props.close();
    }
  };

  return (
    <div className="nykategori-innhold">
      <Form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <span onClick={props.close}>&times;</span>
        <label htmlFor="category">Ny Kategori</label>
        <br />
        <Input
          id="category"
          type="text"
          name="category"
          ref={register({
            required: true,
          })}
        />
        <br />
        <Button isLoading={formState.isSubmitting} type="submit">
          CREATE
        </Button>
      </Form>
    </div>
  );
};

export default CategoryModal;
