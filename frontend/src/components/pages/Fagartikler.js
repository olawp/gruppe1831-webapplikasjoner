/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { list } from '../../utils/artikkelService';
import { list as listCategory, listURL } from '../../utils/categoryService';
import { Button, Input, Select } from '../../styled/style';
import NyArtikkelKnapp from '../artikkel/NyArtikkelKnapp';
import ArtikkelList from '../artikkel/ArtikkelList';
import { useAuthContext } from '../../context/AuthProvider';

let URL = ``;

const NyArtikkel = () => {
  const { isLoggedIn } = useAuthContext();
  const [artikkler, setArtikkler] = useState(null);
  const [kategorier, setKategorier] = useState(null);
  const [error, setError] = useState(null);

  if (!isLoggedIn) {
    URL = `/articles?hidden=false&limit=5`;
  } else {
    URL = `/articles?limit=5`;
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list(URL);
      if (error) {
        setError(error);
      } else {
        setArtikkler(data);
      }
    };
    const fetchCategoryData = async () => {
      const { data, error } = await listCategory();
      if (error) {
        setError(error);
      } else {
        setKategorier(data);
        console.log(data);
      }
    };
    fetchData();
    fetchCategoryData();
  }, []);

  // FILTER OG SEARCH GJØRE QUERIEN UNØDVENDIG LANG, MEN DEN FUNKER !!!SE ETTER FIKS!!!

  function filter() {
    const filter = document.getElementById('filter').value;
    URL += `&category=${filter}`;
    const fetchData = async () => {
      const { data, error } = await listURL(`${URL}`);
      if (error) {
        setError(error);
      } else {
        setArtikkler(data);
      }
    };
    fetchData();
  }

  let searchTerm = '';

  function search() {
    if (
      !document.getElementById('searchField').value.replace(/\s/g, '').length &&
      searchTerm === ''
    ) {
      searchTerm = null;
      search();
    } else {
      searchTerm = document.getElementById('searchField').value;
      URL += `&q=${searchTerm}`;
      const fetchData = async () => {
        const { data, error } = await listURL(`${URL}`);
        if (error) {
          setError(error);
        } else {
          setArtikkler(data);
        }
      };
      fetchData();
    }
  }

  function page() {
    URL += `&page=${this}`;
    const fetchData = async () => {
      const { data, error } = await listURL(`${URL}`);
      if (error) {
        setError(error);
      } else {
        setArtikkler(data);
      }
    };
    fetchData();
  }

  if (artikkler !== null && kategorier !== null) {
    const categories = [];
    let tittel = '';
    const pageButtons = [];

    if (artikkler.totalPages >= 2) {
      for (let i = 1; i <= artikkler.totalPages; i++) {
        pageButtons.push(<button onClick={page.bind(i)}>{i}</button>);
      }
    }

    for (let i = 0; i < kategorier.length; i++) {
      categories.push(
        <option value={kategorier[i].category}>{kategorier[i].category}</option>
      );
    }

    if (artikkler.results === 0) {
      tittel = 'Fant ingen artikler som passet søket ditt';
    } else {
      tittel = 'Fagartikler';
    }
    console.log(artikkler);
    return (
      <div>
        <header>
          <h1>{tittel}</h1>
        </header>
        <main>
          <div>
            <div style={{ float: 'left' }}>
              <NyArtikkelKnapp />
            </div>
            <div style={{ textAlign: 'right' }}>
              <Input
                style={{ width: 'auto' }}
                id="searchField"
                placeholder="Hva ser du etter?"
              />
              <Button onClick={search}>SØK</Button>
              <br />
              <Select id="filter">{categories}</Select>
              <Button onClick={filter}>FILTRER KATEGORI</Button>
            </div>
            <div>
              <ArtikkelList artikkler={artikkler.data}></ArtikkelList>
            </div>
            {pageButtons}
          </div>
        </main>
      </div>
    );
  }
  return (
    <div>
      <header>
        <h1>Laster...</h1>
      </header>
      <main>
        <div>
          <p>{error}</p>
        </div>
      </main>
    </div>
  );
};

export default NyArtikkel;
