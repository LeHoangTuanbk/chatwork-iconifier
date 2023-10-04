import React from "react";
import "./styles.scss";
import SmilingFaceSunglasses from "@/../public/icons/smiling-face-sunglasses.gif";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";

const textareaMaxLength = 1000;
const textareaRows = 10;

export default function Homepage() {
  return (
    <div className="container">
      <h1 className="container__title">
        Iconify your chatwork messages{" "}
        <Image
          src={SmilingFaceSunglasses}
          alt="Smiling face with sun glasses"
        />
      </h1>
      <textarea
        className="container__textarea"
        placeholder="Paste your chatwork message here 🚀"
        required={true}
        maxLength={textareaMaxLength}
        rows={textareaRows}
      />
      <button className="container__button">
        Iconify <span className="button--iconify-icon">✨</span>
      </button>
      <span>Iconified result 💥</span>
      <textarea
        defaultValue={""}
        className="container__textarea container__output"
        readOnly={true}
        placeholder="(Results will appear here 😊)"
        maxLength={textareaMaxLength}
        rows={textareaRows}
      ></textarea>
      <button className="container__button container__button--copy">
        Copy <FaRegCopy />
      </button>
    </div>
  );
}
