import React, { Component } from 'react';
import KontorCard from '../layout/KontorCard';
import KontorListe from '../layout/KontorListe';
import {Button} from '../../styled/style';

export class Kontorer extends Component {

    state = {
        displayGrid: "grid",
        displayList: "none",
        fredrikstadDisplay: "",
        sarpsborgDisplay: "",
        mossDisplay: "",
        osloDisplay: "",
    }

    list = () => {
        this.setState({displayGrid: "none", displayList: "grid"});
    }

    grid = () => {
        this.setState({displayGrid: "grid", displayList: "none"});
    }

    filter = (e) => {
        if(e.target.value === "Fredrikstad"){
            this.setState({fredrikstadDisplay: "", sarpsborgDisplay: "none", mossDisplay: "none", osloDisplay: "none"});
        }
        else if(e.target.value === "Sarpsborg"){
            this.setState({fredrikstadDisplay: "none", sarpsborgDisplay: "", mossDisplay: "none", osloDisplay: "none"});
        }
        else if(e.target.value === "Moss"){
            this.setState({fredrikstadDisplay: "none", sarpsborgDisplay: "none", mossDisplay: "", osloDisplay: "none"});
        }
        else if(e.target.value === "Oslo"){
            this.setState({fredrikstadDisplay: "none", sarpsborgDisplay: "none", mossDisplay: "none", osloDisplay: ""});
        }
        else{
            this.setState({fredrikstadDisplay: "", sarpsborgDisplay: "", mossDisplay: "", osloDisplay: ""});
        }
    }


    render() {
        return (
            <div>
                <header><h1>Våre kontorer</h1></header>
                <main>
                    <div>
                        <select name="lokasjon" onChange={this.filter}>
                            <option value="Alle">Alle</option>
                            <option value="Fredrikstad">Fredrikstad</option>
                            <option value="Sarpsborg">Sarpsborg</option>
                            <option value="Moss">Moss</option>
                            <option value="Oslo">Oslo</option>
                        </select>
                        <Button onClick={this.list}>LIST VIEW</Button>
                        <Button onClick={this.grid}>GRID VIEW</Button>
                    </div>
                    <div style={{display: this.state.fredrikstadDisplay}}>
                        <h2 className="kontorTittel">Fredrikstad (8 kontorer)</h2>
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
                    <div style={{display: this.state.sarpsborgDisplay}}>
                        <h2 className="kontorTittel">Sarpsborg (5 kontorer)</h2>
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
                    <div style={{display: this.state.mossDisplay}}>
                        <h2 className="kontorTittel">Moss (4 kontorer)</h2>
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
                    <div style={{display: this.state.osloDisplay}}>
                        <h2 className="kontorTittel">Oslo (4 kontorer)</h2>
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
