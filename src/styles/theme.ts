import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#35014A",
  textColor: "white",
  infoIconColor: "#2D2F34",
  iconColor: "#B600FF",
  accentColor1: "#8f0651",
  accentColor2: "#8f0651",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "#B600FF",
  textColor: "black",
  infoIconColor: "#FAFAFA",
  iconColor: "#D57AFA",
  accentColor1: "#8f0651",
  accentColor2: "#8f0651",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'ui-rounded';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
