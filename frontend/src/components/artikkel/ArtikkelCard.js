import React, { Component } from 'react'
import {Article, ArticleTitle, Category, SmallContent} from '../../styled/style';

export class ArtikkelCard extends Component {
    render() {
        return (
            <div>
                <Article>
                    <a href={'/artikkel/' + this.props.id}>
                        <ArticleTitle>{this.props.tittel}</ArticleTitle>
                        <Category>{this.props.kategori}</Category>
                        <SmallContent>{this.props.ingress}</SmallContent>
                    </a>
                </Article>
            </div>
        )
    }
}

export default ArtikkelCard
