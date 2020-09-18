import React from "react";
import "./styles.css";
export default class Layout extends React.Component {
  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={this.props.function}>
            &times;
          </span>
          <h2>{this.props.title}</h2>
        </div>
        <div className="modal-body">{this.props.children}</div>
      </div>
    );
  }
}
