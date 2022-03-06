import React, { useEffect, useState, useRef } from "react";
import "./forms.css";
import FontPicker from "font-picker-react";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js";

function Forms() {
  const [font, setNextFont] = useState("Open Sans");
  const [highlightColor, setHighlightColor] = useState("#0000ff");
  const [fontColor, setFontColor] = useState("#0000ff");
  const [isDark, setIsDark] = useState(true);
  const [cookie, setCookie] = useState("no");

  function getAccessToken() {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ3NDU5Mzk3MEFjQTIwMmQ2NGM1NmU1OTRiNkQ1MTBBOTNlRjk3ODkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDY1Njk1MTQ1MDMsIm5hbWUiOiJibG9ja25hdXRzIn0.pmxNt34aCQnQR2avWqQTelCcHO-I5aaCpIxZmvruX3s";
    //!! use this
    // return process.env.WEB3STORAGE_TOKEN;
  }

  function makeStorageClient() {
    return new Web3Storage({
      token: getAccessToken(),
    });
  }

  async function storeFiles() {
    const client = makeStorageClient();

    const obj = {
      cookie: cookie,
      font: font,
      highlightColor: highlightColor,
      fontColor: fontColor,
      isDark: isDark,
    };
    console.log(obj);
    const blob = new Blob([JSON.stringify(obj)], {
      type: "application/json",
    });
    console.log(blob);
    const file = new File([blob], "userPrefs.json");
    console.log(file);
    const cid = await client.put([file]);
    console.log(cid);
    console.log("stored files with cid:", cid);
    return cid;
  }

  return (
    <div>
      <div className="forms__container">
        <span className="forms__button">
          <div className="forms__cookies">
            <p>Cookie Preferences</p>
            <select name="select" onChange={(e) => setCookie(e.target.value)}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="forms__highlightcolor">
            <p>Highlight Color</p>
            <input
              type="color"
              id="colorpicker"
              value={highlightColor}
              onChange={(e) => setHighlightColor(e.target.value)}
            ></input>
          </div>
          <div className="forms__fontcolor">
            <p>Font Color</p>
            <input
              type="color"
              id="colorpicker"
              placeholder="Select Color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            ></input>
          </div>
          <div className="forms__font">
            <p>Font</p>
            <FontPicker
              apiKey="AIzaSyCTtR89twV3uThtcKhEv-DC17FDLOSqM3c"
              activeFontFamily={font}
              onChange={(nextFont) => setNextFont(nextFont.family)}
            />
          </div>
          <div className="forms__dark">
            <p>Dark</p>
            <select
              name="select"
              defaultValue={isDark}
              onChange={(e) => setIsDark(e.target.value)}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
          <button onClick={() => storeFiles()}> Save </button>
        </span>
      </div>
    </div>
  );
}

export default Forms;
