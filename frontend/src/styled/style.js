import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';

export const Button = styled.button`
    background-color: grey;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 5px;
    font-size: 16px;
    border-radius: 50px;
`

export const Form = styled.form`
    border-radius: 25px;
    background-color: white;
    padding: 20px;
    width: 60%;
    display: inline-block;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

export const Section = styled.section`
    background: lightgrey;
    padding: 200px;
`

export const FooterStyle = styled.footer`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background: white;
    clear: both;
`
export const KontorCardStyle = styled.div`
    border: solid;
    background: white;
`
export const KontorListStyle = styled.div`
    margin-bottom: 5px;
    float: left;
    clear: both;
`

export const Select = styled.select`
    font-size: 16px;
    border: 1px solid #aaa;
    margin-top: 5px;
    padding: 14px;
    border-radius: 50px;
`

export const Article = styled.article`
    border: solid;
    background: white;
    margin-top: 10px;
`

export const ArticleTitle = styled.h1`
    text-align: left;
    float: left;
    padding-left: 10px;
`

export const Category = styled.p`
    text-align: right;
    float: right;
    font-weight: bold;
    opacity: 0.6;
    padding-right: 10px;
`

export const SmallContent = styled.p`
    text-align: left;
    clear: both;
    padding-left: 30px;
`

export const NavStyle = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 10px 10px -10px rgba(0,0,0,.2);
    overflow: hidden;
    background: white;
`

export const ForfatterNavn = styled.p`
    text-align: left;
    float: left;
    font-weight: bold;
    font-size: 10px;
`

export const Dato = styled.p`
    text-align: left;
    float: right;
    font-weight: bold;
    font-size: 10px;
`

export const ArtikkelTekst = styled.p`
    text-align: left;
    float: left;
    clear: both;
`

export const ArtikkelKategori = styled.p`
    text-align: left;
    float: left;
    font-weight: bold;
    font-size: 10px;
    clear: both;
`

export const SlettKnapp = styled.button`
    background-color: #f44336;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    float: left;
    clear: both;
`

export const RedigerKnapp = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin-left: 5px;
    float: left;
`

export const NavLoggInn = styled.a`
    background-color: #187bcd;
    color: white !important;
    float: right;
    display: inline;
    padding: 14px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
`

export const NavButtons = styled.a`
    float: right;
    display: inline;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: black;
`

const theme = {
    button: {
        backgroundColor: "grey",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        marginTop: "5px",
        fontSize: "16px",
        borderRadius: "50px",
      },
      form: {
        borderRadius: "25px",
        backgroundColor: "white",
        padding: "20px",
        width: "60%",
        display: "inline-block",
      },
      input: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
      },
      section: {
        background: "lightgrey",
        padding: "200px",
      },
      footer: {
        width: "100%",
        paddingTop: "20px",
        paddingBottom: "20px",
        background: "white",
        clear: "both",
      }
};

const Style = ({ children }) => (
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
)
export default Style;