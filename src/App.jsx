import React from "react";
import { Header } from "./Components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./Context/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/Menu/Menu";
import { Profile } from "./Pages/Profile/Profile";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<h1>About</h1>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
