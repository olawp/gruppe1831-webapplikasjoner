import React, { Component } from 'react';
import KontorCard from '../layout/KontorCard';
import KontorListe from '../layout/KontorListe';

export class Kontorer extends Component {
    render() {
        return (
            <div>
                <header><h1>Våre kontorer</h1></header>
                <main>
                    <div className="kontorFunc"><button>FILTER</button> <button>LIST VIEW</button> <button>GRID VIEW</button></div>
                    <div className="kontorer">
                        <h2>Fredrikstad (8 kontorer)</h2>
                        <div className="kontorGrid">
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                    </div>
                    <div className="kontorer">
                        <h2>Sarpsborg (5 kontorer)</h2>
                        <div className="kontorGrid">
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                    </div>
                    <div className="kontorer">
                        <h2>Moss (4 kontorer)</h2>
                        <div className="kontorGridTo">
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                    </div>
                    <div className="kontorer">
                        <h2>Oslo (4 kontorer)</h2>
                        <div className="kontorGridTo">
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                            <KontorCard></KontorCard>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Kontorer
