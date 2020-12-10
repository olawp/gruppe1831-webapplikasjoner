/* eslint-disable no-undef */
/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen er footeren til siden
 * @exports Footer
 */

/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FooterStyle } from '../../styled/style';

/**
 * @returns footeren blir skrevet ut
 */
export class Footer extends Component {
  render() {
    // start - funnet på stackoverflow https://stackoverflow.com/questions/20972745/how-to-track-time-spent-on-web-site
    let time;
    let timeSite;
    window.onload = function () {
      time = new Date();
    };

    window.onbeforeunload = function () {
      timeSite = new Date() - time;
      console.log(timeSite);
    };
    // slutt
    return (
      <div>
        <FooterStyle>
          <p className="footerInfo">Orgnr: 007 007 007</p>
          <p className="footerInfo">lg@lgror.no</p>
          <p className="footerInfo">99 00 00 00</p>
        </FooterStyle>
      </div>
    );
  }
}

export default Footer;
