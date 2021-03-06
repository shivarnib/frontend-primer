import * as React from "react";
import { applySpec } from "ramda";

import { Actions } from "@domain";
import { selectors } from "@domain/core";

import { connectWithActions } from "@helpers/redux";

import Public from "@ui/layouts/Public";
import Authenticated from "@ui/layouts/Authenticated";

import "./index.css";

interface Props {
  isAuthenticated: boolean;
  actions: Actions;
}

class App extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.props.actions.core.features.fetch();
  }

  public render() {
    return this.props.isAuthenticated ? <Authenticated /> : <Public />;
  }
}

export default connectWithActions(
  /* map State to Props  */
  applySpec<Props>({
    isAuthenticated: selectors.getUserIsAuthenticated
  })
)(App);
