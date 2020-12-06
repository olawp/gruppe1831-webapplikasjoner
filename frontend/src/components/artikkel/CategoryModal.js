/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button } from '../../styled/style';
import { create } from '../../utils/categoryService';

const CategoryModal = (props) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

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
