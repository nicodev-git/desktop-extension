import React, { useEffect, useState } from "react";

const TryItOnLoading = ({ timeout = 2000 }) => {
  const [step, setStep] = useState(0);

  const STEPS = [
    {
      img: chrome.runtime.getURL("images/reposing.png"),
      header: "Reposing",
      subTxt: "YOUR BODY...",
      theme: "black",
    },
    {
      img: chrome.runtime.getURL("images/reshaping.png"),
      header: "Reshaping",
      subTxt: "YOUR CLOTHING...",
      theme: "white",
    },
    {
      img: chrome.runtime.getURL("images/personalizing.png"),
      header: "Personalizing",
      subTxt: "YOUR LOOK...",
      theme: "black",
    },
  ];

  useEffect(() => {
    setTimeout(function () {
      setStep(1);
    }, timeout / STEPS.length);

    setTimeout(function () {
      setStep(2);
    }, (2 * timeout) / STEPS.length);
  }, []);

  return (
    <div className={`klothed-try-it-on__loading ${STEPS[step].theme}`}>
      <img src={STEPS[step].img} />
      <div>
        <h1>{STEPS[step].header}</h1>
        <p>{STEPS[step].subTxt}</p>
      </div>
    </div>
  );
};

const KTryItOn = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: API call
    setLoading(true);
  }, []);

  return (
    <div className="klothed-try-it-on">{loading && <TryItOnLoading />}</div>
  );
};

export default KTryItOn;
