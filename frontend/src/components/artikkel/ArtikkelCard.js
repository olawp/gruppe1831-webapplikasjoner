import React, { Component } from 'react'
import {Article, ArticleTitle, Category, SmallContent} from '../../styled/style';

export class ArtikkelCard extends Component {
    render() {
        return (
            <div>
                <Article>
                    <a href={'/artikkel/' + this.props._id}>
                        <ArticleTitle>{this.props.title}</ArticleTitle>
                        <Category>{this.props.category}</Category>
                        <SmallContent>{this.props.ingress}</SmallContent>
                    </a>
                </Article>
            </div>
        )
    }
}

export default ArtikkelCard
