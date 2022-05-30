import React, { useState } from "react";
import KLogin from "./KLogin";
import KTryItOn from "./KTryItOn";

const KBody = () => {
  const [state, setState] = useState("login");

  const goTryItOn = () => {
    setState("try-it-on");
  };

  return (
    <div className="klothed-ext__body">
      {state === "login" && <KLogin goTryItOn={goTryItOn} />}
      {state === "try-it-on" && <KTryItOn />}
    </div>
  );
};

export default KBody;
