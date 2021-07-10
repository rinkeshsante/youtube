import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import VideoPage from "./VideoPage";

export default function Main({ ExpandMenu }) {
  return (
    <div style={{ marginLeft: ExpandMenu ? 200 : 60 }}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/video/:id" exact component={VideoPage} />
      </Switch>
    </div>
  );
}
