import React from "react";
import TitleBar from "../titlebar";
import "./styles.css";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialClass: "",
    };
  }

  componentDidMount() {
    if (this.props.specialClass !== false) {
      this.setState({ specialClass: "main-container" });
    }

    console.log("mounted from layouts");
  }

  render() {
    return (
      <React.Fragment>
        <TitleBar></TitleBar>
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
