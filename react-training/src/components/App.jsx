import React from "react";
import Provider from "react-redux";
import MovieContainer from "./container/MovieContainer";
import { Footer } from "./footer/Footer";
import HeaderContainer from "./header/HeaderContainer";
import createStoreWithInitialState from "../store/configureStore";

const store = createStoreWithInitialState();

export default () => {
  return (
    <Provider store={store}>
      <div>
        <HeaderContainer />
        <MovieContainer />
        <Footer />
      </div>
    </Provider>
  );
};
