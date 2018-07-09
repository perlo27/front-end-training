import React from "react";
import MovieContainer from "./container/MovieContainer";
import { Footer } from "./footer/Footer";
import HeaderContainer from "./header/HeaderContainer";


export default () => {
  return (
      <React.Fragment>
        <HeaderContainer />
        <MovieContainer />
        <Footer />
      </React.Fragment>
  );
};
