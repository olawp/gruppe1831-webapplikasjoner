import React, { Component } from 'react';
import KontorCard from '../kontor/KontorCard';
import KontorListe from '../kontor/KontorListe';
import {Select, Button} from '../../styled/style';

export class Kontorer extends Component {

    state = {
        displayGrid: "grid",
        displayList: "none",
        fredrikstadDisplay: "",
        sarpsborgDisplay: "",
        mossDisplay: "",
        osloDisplay: "",
        fredrikstad: {
            antallKontorer: 8,
            lokasjon: "fredrikstad",
            class: "kontorGrid"
        },
        sarpsborg: {
            antallKontorer: 5,
            lokasjon: "sarpsborg",
            class: "kontorGrid"
        },
        moss: {
            antallKontorer: 4,
            lokasjon: "moss",
            class: "kontorGridTo"
        },
        oslo: {
            antallKontorer: 4,
            lokasjon: "oslo",
            class: "kontorGridTo"
        },
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
                    <div style={{display: this.state.fredrikstadDisplay}}>
                        <h2 className="kontorTittel">Fredrikstad (8 kontorer)</h2>
                        <div style={{display: this.state.displayGrid}} className="kontorDiv">
                            <KontorCard antallKontorer={this.state.fredrikstad.antallKontorer} lokasjon={this.state.fredrikstad.lokasjon} klasse={this.state.fredrikstad.class}></KontorCard>
                        </div>
                        <div style={{display: this.state.displayList}} className="kontorDiv">
                            <KontorListe antallKontorer={this.state.fredrikstad.antallKontorer} lokasjon={this.state.fredrikstad.lokasjon}></KontorListe>
                        </div>
                    </div>
                    <div style={{display: this.state.sarpsborgDisplay}}>
                        <h2 className="kontorTittel">Sarpsborg (5 kontorer)</h2>
                        <div style={{display: this.state.displayGrid}} className="kontorDiv">
                            <KontorCard antallKontorer={this.state.sarpsborg.antallKontorer} lokasjon={this.state.sarpsborg.lokasjon} klasse={this.state.sarpsborg.class}></KontorCard>
                        </div>
                        <div style={{display: this.state.displayList}} className="kontorDiv">
                            <KontorListe antallKontorer={this.state.sarpsborg.antallKontorer} lokasjon={this.state.sarpsborg.lokasjon}></KontorListe>
                        </div>
                    </div>
                    <div style={{display: this.state.mossDisplay}}>
                        <h2 className="kontorTittel">Moss (4 kontorer)</h2>
                        <div style={{display: this.state.displayGrid}} className="kontorDiv">
                            <KontorCard antallKontorer={this.state.moss.antallKontorer} lokasjon={this.state.moss.lokasjon} klasse={this.state.moss.class}></KontorCard>
                        </div>
                        <div style={{display: this.state.displayList}} className="kontorDiv">
                            <KontorListe antallKontorer={this.state.moss.antallKontorer} lokasjon={this.state.moss.lokasjon}></KontorListe>
                        </div>
                    </div>
                    <div style={{display: this.state.osloDisplay}}>
                        <h2 className="kontorTittel">Oslo (4 kontorer)</h2>
                        <div style={{display: this.state.displayGrid}} className="kontorDiv">
                            <KontorCard antallKontorer={this.state.oslo.antallKontorer} lokasjon={this.state.oslo.lokasjon} klasse={this.state.oslo.class}></KontorCard>
                        </div>
                        <div style={{display: this.state.displayList}} className="kontorDiv">
                            <KontorListe antallKontorer={this.state.oslo.antallKontorer} lokasjon={this.state.oslo.lokasjon}></KontorListe>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Kontorer
