import React from 'react'
import {Article, ArticleTitle, Category, SmallContent} from '../../styled/style';
import { useAuthContext } from '../../context/AuthProvider';

const ArtikkelCard = (props) => {
    const { isLoggedIn } = useAuthContext();
    if(!isLoggedIn && props.isHidden === true){
        return null;
    }
    else if(isLoggedIn && props.isHidden === true){
        return (
                <Article>
                    <a href={'/artikkel/' + props._id}>
                        <ArticleTitle>{props.title}</ArticleTitle>
                        <Category>{props.category}</Category>
                        <SmallContent>{props.ingress}</SmallContent>
                    </a>
                </Article>
        )
    }
    else{
        return (
                <Article>
                    <a href={'/artikkel/' + props._id}>
                        <ArticleTitle>{props.title}</ArticleTitle>
                        <Category>{props.category}</Category>
                        <SmallContent>{props.ingress}</SmallContent>
                    </a>
                </Article>
        )
    }
}

export default ArtikkelCard
