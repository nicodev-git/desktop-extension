import React from "react";
import CloseIcon from "./icons/close";

const KFooter = ({ openExtension, closeExtension }) => {
  return (
    <div className="klothed-ext__footer">
      <img
        width="28"
        height="28"
        src={chrome.runtime.getURL("images/icon.png")}
      />
      <div className="klothed-ext__header__content">Log in to try it on</div>
      <div className="klothed-ext__header__close" onClick={closeExtension}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default KFooter;
