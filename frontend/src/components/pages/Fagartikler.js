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

const NyArtikkel = () => {
  const { isLoggedIn } = useAuthContext();
  const [artikkler, setArtikkler] = useState(null);
  const [kategorier, setKategorier] = useState(null);
  const [error, setError] = useState(null);
  const [firstLoadOfArticles, setFirstLoadOfArticles] = useState(true);
  const [ignoreFirstLoad, setIgnoreFirstLoad] = useState(true);
  const [URL, setURL] = useState('/articles?limit=5&hidden=false');

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
        setKategorier(data.data);
      }
    };
    fetchData();
    fetchCategoryData();
  }, []);

  function updateArtikkler(URL) {
    const fetchData = async () => {
      const { data, error } = await list(URL);
      if (error) {
        setError(error);
      } else {
        setArtikkler(data);
      }
    };
    fetchData();
  }

  // FILTER OG SEARCH GJØRE QUERIEN UNØDVENDIG LANG, MEN DEN FUNKER !!!SE ETTER FIKS!!!

  function filter() {
    const filter = document.getElementById('filter').value;
    setURL(`${URL}&categoryid=${filter}&page=1`);
    updateArtikkler(`${URL}&categoryid=${filter}&page=1`);
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
      setURL(`${URL}&q=${searchTerm}&page=1`);
      updateArtikkler(`${URL}&q=${searchTerm}&page=1`);
    }
  }

  function page() {
    setURL(`${URL}&page=${this}`);
    updateArtikkler(`${URL}&page=${this}`);
  }

  if (artikkler !== null && kategorier !== null) {
    let tittel = '';
    const pageButtons = [];

    if (artikkler.totalPages >= 2) {
      for (let i = 1; i <= artikkler.totalPages; i++) {
        pageButtons.push(<button onClick={page.bind(i)}>{i}</button>);
      }
    }

    if (artikkler.results === 0) {
      tittel = 'Fant ingen artikler som passet søket ditt';
    } else {
      tittel = 'Fagartikler';
    }

    if (isLoggedIn && firstLoadOfArticles === true) {
      setURL('/articles?limit=5');
      updateArtikkler('/articles?limit=5');
      setFirstLoadOfArticles(false);
      setIgnoreFirstLoad(false);
    } else if (
      !isLoggedIn &&
      firstLoadOfArticles === true &&
      !ignoreFirstLoad
    ) {
      setFirstLoadOfArticles(false);
    }
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
              <Select id="filter">
                {kategorier &&
                  kategorier.map((kategori) => (
                    <option value={kategori.id}>{kategori.category}</option>
                  ))}
              </Select>
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
