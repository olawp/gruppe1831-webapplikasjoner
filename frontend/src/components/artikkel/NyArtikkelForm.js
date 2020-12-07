/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button } from '../../styled/style';
import { useForm } from 'react-hook-form';
import { create } from '../../utils/artikkelService';
import { list } from '../../utils/categoryService';
import CategoryModal from './CategoryModal';
import { useAuthContext } from '../../context/AuthProvider.jsx';
import { useHistory, useLocation } from 'react-router-dom';
import { upload } from '../../utils/imageService';

const NyArtikkelForm = () => {
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [categories, setCategories] = useState(null);
  const [titleIsFilled, setTitleIsFilled] = useState('red');
  const [ingressIsFilled, setIngressIsFilled] = useState('red');
  const [contentIsFilled, setContentIsFilled] = useState('red');
  const [submitButtonActive, setSubmitButtonActive] = useState(false);
  const [submitButtonColor, setSubmitButtonColor] = useState('grey');
  const [categoryModal, setCategoryModal] = useState('none');
  const history = useHistory();
  const { state } = useLocation();
  const [file, setFile] = useState();
  const [src, setSrc] = useState();
  const [imageId, setImageId] = useState(null);
  // let imageId;

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const handleImageSubmit = async (image) => {
    console.log(image);

    const { data } = await upload(image);
    console.log(data);
    if (!data.success) {
      setError(data.message);
    } else {
      setImageId(data?.data?._id);
      setSuccess(true);
      setError(null);
    }
    console.log(imageId);
  };

  useEffect(() => {
    if (state) {
      history.push(state.from.pathname);
    }
  }, [history, state]);

  const onSubmit = async (credentials) => {
    let data;

    if (imageId === null) {
      data = {
        title: credentials.title,
        hidden: credentials.hidden,
        ingress: credentials.ingress,
        content: credentials.content,
        category: credentials.category,
        author: credentials.author,
        user: credentials.user,
        categoryid: credentials.category,
      };
    } else {
      data = {
        title: credentials.title,
        hidden: credentials.hidden,
        ingress: credentials.ingress,
        content: credentials.content,
        category: credentials.category,
        author: credentials.author,
        user: credentials.user,
        categoryid: credentials.category,
        image: imageId,
      };
    }
    data = await create(data);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
    }
    history.push('/fagartikler'); // Denne må kanskje flyttes, vil redirecte uansett outcome
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list(); // Endre url senere
      if (!data.success) {
        setError(error);
      } else {
        setCategories(data.data);
        setError(null);
      }
    };
    fetchData();
  }, []);

  function updateCategory() {
    const fetchData = async () => {
      const { data } = await list(); // Endre url senere
      if (!data.success) {
        setError(error);
      } else {
        setCategories(data.data);
        setError(null);
      }
    };
    fetchData();
  }

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

  function closeCategory() {
    setCategoryModal('none');
  }

  function openCategory() {
    setCategoryModal('');
  }

  return (
    <div>
      <div className="nykategori" style={{ display: categoryModal }}>
        <CategoryModal close={closeCategory} updateCategory={updateCategory} />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor="image">Last opp artikkelbilde: </label>
        <Input
          style={{ width: 'auto' }}
          type="file"
          id="image"
          name="image"
          accept=".jpeg,.jpg,.png"
          onChange={(event) => {
            console.log(event);
            const imageFile = event.target.files[0];
            handleImageSubmit(imageFile);
          }}
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
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category._id}>
                {category.category}
              </option>
            ))}
        </Select>
        <Button
          type="button"
          style={{ backgroundColor: 'green' }}
          onClick={openCategory}
        >
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
