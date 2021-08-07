import React from "react";
import { Container } from "theme-ui";
import { Redirect, Route, Switch } from "react-router-dom";
import { Search } from "src/pages/Search";
import { SearchDetail } from "src/pages/SearchDetail";
import { Reserve } from "src/pages/Reserve";
import { Header } from "src/components/Header";
import Modal from "react-modal";

const App: React.FC = () => {
  React.useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <Container sx={{ maxWidth: "100%", width: "auto" }}>
      <Container sx={{ py: 6, px: [4, "15%"] }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/search/:name">
            <SearchDetail />
          </Route>
          <Route exact path="/search/:name/reserve">
            <Reserve />
          </Route>
        </Switch>
      </Container>
    </Container>
  );
};

export default App;
