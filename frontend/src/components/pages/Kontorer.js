import React, { Component } from 'react';
import KontorCard from '../layout/KontorCard';
import KontorListe from '../layout/KontorListe';

export class Kontorer extends Component {

    state = {
        displayGrid: "grid",
        displayList: "none"
    }

    list = () => {
        this.setState({displayGrid: "none", displayList: "grid"});
    }

    grid = () => {
        this.setState({displayGrid: "grid", displayList: "none"});
    }

    render() {
        return (
            <div>
                <header><h1>Våre kontorer</h1></header>
                <main>
                    <div className="kontorFunc"><button>FILTER</button> <button onClick={this.list}>LIST VIEW</button> <button onClick={this.grid}>GRID VIEW</button></div>
                    <div className="kontorer">
                        <h2>Fredrikstad (8 kontorer)</h2>
                        <div className="kontorGrid" style={{display: this.state.displayGrid}}>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                        <div className="kontorListe" style={{display: this.state.displayList}}>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                        </div>
                    </div>
                    <div className="kontorer">
                        <h2>Sarpsborg (5 kontorer)</h2>
                        <div className="kontorGrid" style={{display: this.state.displayGrid}}>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                        <div className="kontorListeTo" style={{display: this.state.displayList}}>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                        </div>
                    </div>
                    <div className="kontorer">
                        <h2>Moss (4 kontorer)</h2>
                        <div className="kontorGridTo" style={{display: this.state.displayGrid}}>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                        <div className="kontorListeTre" style={{display: this.state.displayList}}>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                        </div>
                    </div>
                    <div className="kontorer">
                        <h2>Oslo (4 kontorer)</h2>
                        <div className="kontorGridTo" style={{display: this.state.displayGrid}}>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                        <div className="kontorListeTre" style={{display: this.state.displayList}}>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                            <KontorListe></KontorListe>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Kontorer
