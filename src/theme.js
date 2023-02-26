import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
    "main-bg": "#a2b9bc",
    "white-text": "#E8E8EA",
    "subtle-text": "#9B9B9B",

    "column-bg": "#dac292",
    "column-header-bg": "#bdcebe",

    "card-bg": "#242731",
    "card-border": "#2D313E"
};

const fonts = {
    heading: "Poppins",
    body: "Poppins",
};

export default extendTheme({
    ...theme,
    colors,
    fonts,
})