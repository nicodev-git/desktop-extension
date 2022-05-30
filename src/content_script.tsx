import React from "react";
import ReactDOM from "react-dom";
import Popup from "./popup";

const css = require("./css/styles.css").toString();

function renderPopup() {
  // Attach shadow DOM
  const shadowWrapper = document.createElement("div");
  const shadow = shadowWrapper.attachShadow({ mode: "open" });
  const renderWrapper = document.createElement("div");
  shadow.appendChild(renderWrapper);

  // Add styles to Shadow DOM
  let style = document.createElement("style");
  style.textContent = css;
  shadow.appendChild(style);

  ReactDOM.render(<Popup />, renderWrapper);

  document.body.appendChild(shadowWrapper);
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action == "show_popup") {
    renderPopup();
  }
});
