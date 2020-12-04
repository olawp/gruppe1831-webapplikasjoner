import React, { Component } from 'react'

export class AnsattCard extends Component {
    render() {
        const kort = [];

        for(let i = 0; i < this.props.antall; i++){
            kort.push(
                <div>
                    <div><p>IMAGE</p></div>
                        <p>Ansatt AnsattNavn</p>
                    <p>Stilling</p>
                </div>
            )
        }
        return(kort)
    }
}

export default AnsattCard
