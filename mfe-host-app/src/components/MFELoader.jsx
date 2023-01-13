import React, { useState, Suspense, useEffect } from "react";

function MFELoader(props) {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState({});

  const { host, mfe, properties } = props.widgetConfig;
  useEffect(() => {
    loadMFEScript(host, mfe, (resp) => {
      console.log("script load resp", resp ? resp.error : "");
      if (resp && resp.type === "error") {
        setLoadError(resp);
        setLoaded(false);
      } else {
        setLoaded(true);
      }
    });
  }, [host, mfe]);
  if (loaded) {
    return React.createElement(mfe, { ...properties });
  } else {
    if (loadError && loadError.type === "error") {
      return React.createElement(
        "h3",
        { style: { color: "red" } },
        "Error While loading the mfe"
      );
    } else {
      return React.createElement("h3", null, "Loading......");
    }
  }
}

const loadMFEScript = (host, mfe, callback) => {
  const existingScript = document.getElementById(mfe);
  if (!existingScript) {
    try {
      const script = document.createElement("script");
      script.src = host;
      script.id = mfe;
      document.body.appendChild(script);
      script.onload = () => {
        if (callback) callback();
      };

      script.onerror = (e) => {
        console.log("onerror");
        if (callback) callback(e);
      };
    } catch (e) {
      console.error("error while loading script", e);
    }
  }
  if (existingScript && callback) callback();
};

export default MFELoader;
