import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  breakpoints: {
    chota:"500px",
    pro:"418px",
    base:"0em",
    sm: "30em", // Custom breakpoint for smaller screens
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
});

export default Theme;