import React from "react";
import "./styles.scss";

export default function Homepage() {
  return (
    <div className="container">
      <h1 className="container__title">Iconify your chatwork messages</h1>
      <textarea
        className="container__textarea"
        placeholder="Paste your chatwork message here"
        required={true}
      />
      <button className="container__button">Iconify</button>
      <span>Output</span>
      <textarea
        defaultValue={""}
        className="container__textarea container__output"
        readOnly={true}
        placeholder="(Results will appear here)"
      ></textarea>
      <button className="container__button">Copy</button>
    </div>
  );
}
