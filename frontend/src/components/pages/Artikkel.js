/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Axios from 'axios';
import {
  ForfatterNavn,
  Dato,
  ArtikkelTekst,
  ArtikkelKategori,
  Form,
  Button,
  Input,
  Select,
} from '../../styled/style';
import DeleteEditKnapper from '../artikkel/DeleteEditKnapp';
import CategoryModal from '../artikkel/CategoryModal';

export class Artikkel extends Component {
  state = {
    artikkel: [],
    kategorier: [],
    forfattere: ['Lars Larsen', 'Gunn Gundersen', 'Simen Simensen'],
    display: 'none',
    kategorien: '',
    kategoriID: '',
    categoryModal: 'none',
  };

  componentDidMount() {
    Axios.get(
      `http://localhost:5000/api/v1/articles/${window.location.href
        .split('/')[4]
        .toString()}`
    )
      .then((res) => this.setState({ artikkel: res.data }))
      .catch(function (error) {
        if (error.toString() === 'Error: Request failed with status code 500') {
          document.getElementById('tittel').innerHTML =
            'Finner ikke artikkelen du ser etter';
          document.getElementById('forfatter').innerHTML = '';
        } else {
          alert(
            `Noe feil skjedde under inhentingen av artiklen. \n Error: ${{
              error,
            }}`
          );
        }
      });
    Axios.get('http://localhost:5000/api/v1/categories')
      .then((res) => this.setState({ kategorier: res.data }))
      .catch((error) =>
        alert(`Kategorier ble ikke hentet ordentlig. \n Error: ${error}`)
      );
  }

  convertDate() {
    const date = new Date(this.state.artikkel.createdAt);
    if (date.toString() !== 'Invalid Date') {
      return `${date
        .getDate()
        .toString()}.${date.getMonth().toString()}.${date.getFullYear()}`;
    }
  }

  deleteArticle() {
    Axios.delete(
      `http://localhost:5000/api/v1/articles/${window.location.href
        .split('/')[4]
        .toString()}`
    )
      .then(
        alert('Artikklen ble slettet'),
        (window.location.href = 'http://localhost:3000/fagartikler')
      )
      .catch((error) =>
        alert(`Artikklen ble ikke slettet. \n Error: ${{ error }}`)
      );
  }

  editArticle() {
    Axios.put(
      `http://localhost:5000/api/v1/articles/${window.location.href
        .split('/')[4]
        .toString()}`,
      {
        title: document.getElementById('title').value,
        ingress: document.getElementById('ingress').value,
        content: document.getElementById('content').value,
        category: document.getElementById('category').value,
        author: document.getElementById('author').value,
        hidden: document.getElementById('hiddenCheckbox').checked,
      }
    )
      .then(
        (window.location.href = `http://localhost:3000/artikkel/${window.location.href
          .split('/')[4]
          .toString()}`)
      )
      .catch((error) =>
        alert(`Artikklen ble ikke redigert. \n Error: ${{ error }}`)
      );
  }

  openEditArticle = () => {
    this.setState({ display: '' });
    document.getElementById('title').value = this.state.artikkel.title;
    document.getElementById('ingress').value = this.state.artikkel.ingress;
    document.getElementById('content').value = this.state.artikkel.content;
    document.getElementById('category').value = this.state.kategoriID;
    document.getElementById('author').value = this.state.artikkel.author;
    document.getElementById(
      'hiddenCheckbox'
    ).checked = this.state.artikkel.hidden;
  };

  compareReturnCategory(categoryA, categoryB) {
    if (categoryA.id === categoryB) {
      return categoryA.category;
    }
  }

  compareReturnID(categoryA, categoryB) {
    if (categoryA.id === categoryB) {
      return categoryA.id;
    }
  }

  closeCategory() {
    this.setState({ categoryModal: 'none' });
  }

  openCategory() {
    this.setState({ categoryModal: '' });
  }

  updateCategory() {
    Axios.get('http://localhost:5000/api/v1/categories')
      .then((res) => this.setState({ kategorier: res.data }))
      .catch((error) =>
        alert(`Kategorier ble ikke hentet ordentlig. \n Error: ${error}`)
      );
  }

  render() {
    if (JSON.stringify(this.state.kategorier.data) !== undefined) {
      // eslint-disable-next-line array-callback-return
      this.state.kategorier.data.map((kategori) => {
        if (
          this.compareReturnCategory(kategori, this.state.artikkel.category) !==
          undefined
        ) {
          this.state.kategorien = this.compareReturnCategory(
            kategori,
            this.state.artikkel.category
          );
        }
        if (
          this.compareReturnID(kategori, this.state.artikkel.category) !==
          undefined
        ) {
          this.state.kategoriID = this.compareReturnID(
            kategori,
            this.state.artikkel.category
          );
        }
      });
    }

    return (
      <div>
        {
          // GJENBRUKER KLASSEN FRA "Ny Kategori Modalen" - If it ain't broke, dont fix it
        }
        <div style={{ display: this.state.display }} className="nykategori">
          <div className="nykategori-innhold">
            <Form>
              <label>Tittel</label>
              <br />
              <Input id="title"></Input>
              <br />
              <label>Ingress</label>
              <br />
              <Input id="ingress"></Input>
              <br />
              <label>Innhold</label>
              <br />
              <Input type="textarea" id="content"></Input>
              <br />
              <label>
                Innholdet skal kun være synlig for innloggede brukere:
              </label>
              <Input
                style={{
                  zoom: 1.25,
                  transform: 'scale(1.25)',
                  width: 'auto',
                  marginLeft: '5px',
                }}
                type="checkbox"
                id="hiddenCheckbox"
                onClick={this.test}
              ></Input>
              <br />
              <label htmlFor="category">Kategori</label>
              <br />
              <Select id="category" name="category">
                {this.state.kategorier.data &&
                  this.state.kategorier.data.map((kategori) => (
                    <option key={kategori._id} value={kategori._id}>
                      {kategori.category}
                    </option>
                  ))}
              </Select>
              <Button
                type="button"
                style={{ backgroundColor: 'green' }}
                onClick={this.openCategory.bind(this)}
              >
                LAG NY KATEGORI
              </Button>
              <br />
              <label>Forfatternavn</label>
              <br />
              <Select id="author">
                <option value={this.state.forfattere[0]}>
                  {this.state.forfattere[0]}
                </option>
                <option value={this.state.forfattere[1]}>
                  {this.state.forfattere[1]}
                </option>
                <option value={this.state.forfattere[2]}>
                  {this.state.forfattere[2]}
                </option>
              </Select>
              <br />
              <Button type="button" onClick={this.editArticle}>
                OPPDATER ARTIKKEL
              </Button>
            </Form>
          </div>
        </div>
        <div
          className="nykategori"
          style={{ display: this.state.categoryModal }}
        >
          <CategoryModal
            close={this.closeCategory.bind(this)}
            updateCategory={this.updateCategory.bind(this)}
          />
        </div>
        <header>
          <h1 id="tittel">{this.state.artikkel.title}</h1>
        </header>
        <main>
          <div>
            <ForfatterNavn id="forfatter">
              Av {this.state.artikkel.author}
            </ForfatterNavn>
            <Dato>{this.convertDate()}</Dato>
          </div>
          <ArtikkelTekst>{this.state.artikkel.ingress}</ArtikkelTekst>
          <ArtikkelTekst>{this.state.artikkel.content}</ArtikkelTekst>
          <ArtikkelKategori>{this.state.kategorien}</ArtikkelKategori>
          <div>
            <DeleteEditKnapper
              edit={this.openEditArticle}
              delete={this.deleteArticle}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Artikkel;
