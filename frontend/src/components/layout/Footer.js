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
