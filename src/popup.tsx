import React, { useEffect, useState, useRef } from "react";
import KHeader from "./components/KHeader";
import KBody from "./components/KBody";
import CrossIcon from "./components/icons/cross";

let isDown = false;
let offset = [0, 0];

const Popup = () => {
  const [isExtended, setIsExtended] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const popupRef = useRef(null);
  const crossRef = useRef(null);

  const openExtension = () => {
    if (!isExtended) {
      setIsExtended(true);
      setShowBody(true);
    }
  };

  const closeExtension = () => {
    if (isExtended) {
      setIsExtended(false);
      setTimeout(function () {
        setShowBody(false);
      }, 300);
    }
  };

  const onMouseDown = (e) => {
    isDown = true;
    setIsHover(true);
    offset = [
      popupRef.current.offsetLeft - e.clientX,
      popupRef.current.offsetTop - e.clientY,
    ];

    document.addEventListener(
      "mouseup",
      function () {
        isDown = false;
        setIsHover(false);
      },
      true
    );

    document.addEventListener(
      "mousemove",
      function (event) {
        event.preventDefault();
        if (isDown) {
          // popupRef.current.style.left = (event.clientX + offset[0]) + 'px';
          popupRef.current.style.top = event.clientY + offset[1] + "px";
        }
      },
      true
    );
  };

  const openPopup = () => {
    setIsHover(true);
  };

  return (
    <div
      className={`klothed-ext ${isHover && "hover"} ${
        isExtended && "extended"
      }`}
      id="klothed-ext"
      ref={popupRef}
    >
      <div className="klothed-flex">
        <div
          style={{
            width: showBody ? "100%" : 56,
          }}
        >
          <KHeader
            openExtension={openExtension}
            closeExtension={closeExtension}
          />
        </div>
        {!showBody && (
          <div
            className="klothed-ext__cross"
            id="klothed-ext__cross"
            onMouseDown={onMouseDown}
            ref={crossRef}
          >
            <CrossIcon />
          </div>
        )}
      </div>
      {isExtended && <KBody />}
    </div>
  );
};

export default Popup;
