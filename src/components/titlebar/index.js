import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faWindowMaximize,
  faWindowMinimize,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
const electron = window.require("electron");
const win = electron.remote.getCurrentWindow();

export default function TitleBar() {
  function handleControl(action) {
    
    switch (action) {
      case "maximize":
        win.maximize();
        break;
      case "minimize":
        win.minimize();
        break;
      case "unmaximize":
        win.unmaximize();
        break;
      case "close":
        win.close();
        break;
      default:
        break;
    }
    if (win.isMaximized()) {
      document.body.classList.add("maximized");
    } else {
      document.body.classList.remove("maximized");
    }
  }

  return (
    <header id="titlebar">
      <div id="drag-region">
        <div id="window-title">
          <span className="no-selection">Optometria</span>
        </div>
        <div id="window-controls">
          <div
            className="button"
            id="min-button"
            onClick={() => handleControl("minimize")}
          >
            <FontAwesomeIcon className="icon" icon={faWindowMinimize} />
          </div>
          <div
            className="button"
            id="max-button"
            onClick={() => handleControl("maximize")}
          >
            <FontAwesomeIcon className="icon" icon={faWindowMaximize} />
          </div>
          <div
            className="button"
            id="restore-button"
            onClick={() => handleControl("unmaximize")}
          >
            <FontAwesomeIcon className="icon" icon={faWindowRestore} />
          </div>
          <div
            className="button"
            id="close-button"
            onClick={() => handleControl("close")}
          >
            <FontAwesomeIcon className="icon" icon={faWindowClose} />
          </div>
        </div>
      </div>
    </header>
  );
}
