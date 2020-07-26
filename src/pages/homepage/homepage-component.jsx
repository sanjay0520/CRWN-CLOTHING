import React from "react";

import "./homepage.styles.scss";
import { HomePageContainer } from "./homepage.styles.jsx";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <h1>Crown Clothing....</h1>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
