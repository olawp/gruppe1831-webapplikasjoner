/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Article,
  ArticleTitle,
  Category,
  SmallContent,
} from '../../styled/style';
import { useAuthContext } from '../../context/AuthProvider';

const ArtikkelCard = (props) => {
  const limitedIngress = props.ingress
    .substring(0, 150)
    .concat('... (klikk for å lese mer) ');
  console.log(limitedIngress);
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn && props.isHidden === true) {
    return null;
    // eslint-disable-next-line no-else-return
  } else if (isLoggedIn && props.isHidden === true) {
    return (
      <Article>
        <a href={`/artikkel/${props._id}`}>
          <ArticleTitle>{props.title}</ArticleTitle>
          <Category>{props.category}</Category>
          <SmallContent>{limitedIngress}</SmallContent>
        </a>
      </Article>
    );
  } else {
    return (
      <Article>
        <a href={`/artikkel/${props._id}`}>
          <ArticleTitle>{props.title}</ArticleTitle>
          <Category>{props.category}</Category>
          <SmallContent>{limitedIngress}</SmallContent>
        </a>
      </Article>
    );
  }
};

export default ArtikkelCard;
