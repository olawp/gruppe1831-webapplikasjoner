import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
  background-color: #F0F0F0;
}

main{
  margin: 20px;
}

main.hjem{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}

.footerInfo{
  display: inline;
  padding-left: 15px;
  padding-right: 15px;
}

.navigationBar h3{
  float: left;
  display: block;
  margin: 0;
  padding-left: 50px;
  padding-top: 14px;
  font-weight: bold;
}

a{
  text-align: center;
  text-decoration: none;
  color: black;
}

a:hover{
  opacity: .9;
}

.navigationBar .loggInn:hover{
  background-color: #1167b1;
  color: white;
}

.navigationBar a:hover{
  background-color: #555;
  color: white !important;
}

.navigationBar a.active{
  color: #187bcd;
}

header{
  background: lightgrey;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 70px;
  margin-bottom: 20px;
}

a.hjemKontorer{
  grid-area: 1 / 1 / 2 / 2;
}

a.hjemKontakt{
  grid-area: 1 / 2 / 2 / 4;
}

a.hjemArtikkler{
  grid-area: 2 / 1 / 3 / 4;
}

.button{
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
}

.kontorGrid{
  clear: both;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.kontorGridTo{
  clear: both;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.kontorTittel{
  float: "left";
  clear: "both";
}

.ansattDiv{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-bottom: 20px;
}

.nykategori {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.nykategori-innhold{
  margin: 15% auto;
  padding: 20px;
  border-radius: 25px;
  background-color: white;
  padding: 20px;
  width: 60%;
  display: inline-block;
}

.nykategori span{
  float: right;
  border: solid;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
}

.mobileMenu{
  display: none;
}


@media only screen and (max-width: 800px) {
  main.hjem {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    }
    
  a.hjemKontorer { grid-area: 1 / 1 / 2 / 2; }
  a.hjemKontakt { grid-area: 2 / 1 / 3 / 2; }
  a.hjemArtikkler { grid-area: 3 / 1 / 4 / 2; }

  .kontorGrid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  section{
    background: lightgrey;
    padding: 100px;
  }

  .navigationBar a{
    float: right;
    display: none;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: black;
  }

  .mobileMenu{
    display: inline;
  }
  
}

@media only screen and (max-width: 500px) {
  section{
    background: lightgrey;
    padding: 100px;
  }

  .kontorGrid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  
  .kontorGridTo{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

}
`;

export { GlobalStyles };
