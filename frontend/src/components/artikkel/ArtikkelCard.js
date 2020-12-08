/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen skriver ut korta til artikklene som er skrevet for siden
 * @exports ArtikkelCard
 */

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

/**
 * @desc Skriver ut kortene til artikklene basert på informasjonen som blir sendt med via props
 * @param {*} props Er informasjon som blir sendt med fra filen (her: ArtikkelList.js) som bruker ArtikkelCard.js
 * @const limitedIngress Tar props.ingress og omgjør den til å bare vise de 150 første bokstavene til ingressen til artikkelen
 * @const isLoggedIn refererer til AuthProvider.js for en beskrivelse
 */
const ArtikkelCard = (props) => {
  const limitedIngress = props.ingress
    .substring(0, 150)
    .concat('... (klikk for å lese mer) ');
  const { isLoggedIn } = useAuthContext();
  /**
   * @desc Dersom brukeren ikke er logget inn og artikkelen skal være skjult, så skal ingenting skrives ut
   * @returns null
   */
  if (!isLoggedIn && props.isHidden === true) {
    return null;
    // eslint-disable-next-line no-else-return
  } else if (isLoggedIn && props.isHidden === true) {
    /**
     * @desc Dersom brukeren er logget inn og artikkelen skal være skjult, så skal artikklen skrives ut
     * @returns Skriver ut kortene til artikklene samt de skjulte
     */
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
    /**
     * @desc Dersom brukeren er logget inn og artikkelen ikke er skjult, så skal artikklen skrives ut
     * @returns Skriver ut kortene til artikklene, men ikke de skjulte
     */
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
