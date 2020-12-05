/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import KontorCard from '../kontor/KontorCard';
import KontorListe from '../kontor/KontorListe';
import { Select, Button } from '../../styled/style';

export class Kontorer extends Component {
  state = {
    displayGrid: 'grid',
    displayList: 'none',
    fredrikstadDisplay: '',
    sarpsborgDisplay: '',
    mossDisplay: '',
    osloDisplay: '',
    fredrikstad: {
      antallKontorer: 8,
      lokasjon: 'fredrikstad',
      class: 'kontorGrid',
      officeNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    sarpsborg: {
      antallKontorer: 5,
      lokasjon: 'sarpsborg',
      class: 'kontorGrid',
      officeNumbers: [9, 10, 11, 12, 13],
    },
    moss: {
      antallKontorer: 4,
      lokasjon: 'moss',
      class: 'kontorGridTo',
      officeNumbers: [14, 15, 16, 17],
    },
    oslo: {
      antallKontorer: 4,
      lokasjon: 'oslo',
      class: 'kontorGridTo',
      officeNumbers: [18, 19, 20, 21],
    },
  };

  list = () => {
    this.setState({ displayGrid: 'none', displayList: 'grid' });
  };

  grid = () => {
    this.setState({ displayGrid: 'grid', displayList: 'none' });
  };

  filter = (e) => {
    if (e.target.value === 'Fredrikstad') {
      this.setState({
        fredrikstadDisplay: '',
        sarpsborgDisplay: 'none',
        mossDisplay: 'none',
        osloDisplay: 'none',
      });
    } else if (e.target.value === 'Sarpsborg') {
      this.setState({
        fredrikstadDisplay: 'none',
        sarpsborgDisplay: '',
        mossDisplay: 'none',
        osloDisplay: 'none',
      });
    } else if (e.target.value === 'Moss') {
      this.setState({
        fredrikstadDisplay: 'none',
        sarpsborgDisplay: 'none',
        mossDisplay: '',
        osloDisplay: 'none',
      });
    } else if (e.target.value === 'Oslo') {
      this.setState({
        fredrikstadDisplay: 'none',
        sarpsborgDisplay: 'none',
        mossDisplay: 'none',
        osloDisplay: '',
      });
    } else {
      this.setState({
        fredrikstadDisplay: '',
        sarpsborgDisplay: '',
        mossDisplay: '',
        osloDisplay: '',
      });
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Våre kontorer</h1>
        </header>
        <main>
          <div>
            <Select name="lokasjon" onChange={this.filter}>
              <option value="Alle">Alle</option>
              <option value="Fredrikstad">Fredrikstad</option>
              <option value="Sarpsborg">Sarpsborg</option>
              <option value="Moss">Moss</option>
              <option value="Oslo">Oslo</option>
            </Select>
            <Button onClick={this.list}>LIST VIEW</Button>
            <Button onClick={this.grid}>GRID VIEW</Button>
          </div>
          <div style={{ display: this.state.fredrikstadDisplay }}>
            <h2 className="kontorTittel">Fredrikstad (8 kontorer)</h2>
            <div
              style={{ display: this.state.displayGrid }}
              className="kontorDiv"
            >
              <KontorCard info={this.state.fredrikstad} />
            </div>
            <div
              style={{ display: this.state.displayList }}
              className="kontorDiv"
            >
              <KontorListe info={this.state.fredrikstad} />
            </div>
          </div>
          <div style={{ display: this.state.sarpsborgDisplay }}>
            <h2 className="kontorTittel">Sarpsborg (5 kontorer)</h2>
            <div
              style={{ display: this.state.displayGrid }}
              className="kontorDiv"
            >
              <KontorCard info={this.state.sarpsborg} />
            </div>
            <div
              style={{ display: this.state.displayList }}
              className="kontorDiv"
            >
              <KontorListe info={this.state.sarpsborg} />
            </div>
          </div>
          <div style={{ display: this.state.mossDisplay }}>
            <h2 className="kontorTittel">Moss (4 kontorer)</h2>
            <div
              style={{ display: this.state.displayGrid }}
              className="kontorDiv"
            >
              <KontorCard info={this.state.moss} />
            </div>
            <div
              style={{ display: this.state.displayList }}
              className="kontorDiv"
            >
              <KontorListe info={this.state.moss} />
            </div>
          </div>
          <div style={{ display: this.state.osloDisplay }}>
            <h2 className="kontorTittel">Oslo (4 kontorer)</h2>
            <div
              style={{ display: this.state.displayGrid }}
              className="kontorDiv"
            >
              <KontorCard info={this.state.oslo} />
            </div>
            <div
              style={{ display: this.state.displayList }}
              className="kontorDiv"
            >
              <KontorListe info={this.state.oslo} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Kontorer;
