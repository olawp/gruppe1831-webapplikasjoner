import React, { Component } from 'react'

export class AnsattCard extends Component {
    render() {
        return (
            <div>
                <div><p>IMAGE</p></div>
                <p>Ansatt ´$ansattnavn´</p>
                <p>´$stilling´</p>
            </div>
        )
    }
}

export default AnsattCard
