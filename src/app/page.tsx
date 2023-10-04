"use client";
import React from "react";
import "./styles.scss";
import SmilingFaceSunglasses from "@/../public/icons/smiling-face-sunglasses.gif";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const textareaMaxLength = 1000;
const textareaRows = 10;

export default function Homepage() {
  const handleCopy = () => {
    toast.success("Copied to clipboard!", {
      duration: 2000,
      position: "top-right",
      icon: "👏",
      style: {
        background: "#1677ff",
        color: "#fff",
      },
    });
  };
  return (
    <div>
      <div>
        <Toaster />
      </div>
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
        <button className="container__button">Iconify ✨</button>
        <span>Iconified result 💥</span>
        <textarea
          defaultValue={""}
          className="container__textarea container__output"
          readOnly={true}
          placeholder="(Results will appear here 😊)"
          maxLength={textareaMaxLength}
          rows={textareaRows}
        ></textarea>
        <button
          className="container__button container__button--copy"
          onClick={handleCopy}
        >
          Copy <FaRegCopy />
        </button>
      </div>
    </div>
  );
}
