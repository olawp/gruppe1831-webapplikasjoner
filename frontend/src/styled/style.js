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
    border: solid;
    background: white;
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
      },
};

const Style = ({ children }) => (
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
)
export default Style;