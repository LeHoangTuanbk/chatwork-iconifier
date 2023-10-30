"use client";
import React, { ChangeEvent, useState } from "react";
import "./styles.scss";
import { FaRegCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import callAPItoAddLabel from "@/service/openai-api";
import { replaceWithIcons } from "@/utility";

export default function Homepage() {
  const [userInput, setUserInput] = useState<string>("");
  const [iconifiedOutput, setIconifiedOutput] = useState<React.ReactNode>();
  const [outputForUser, setOutputForUser] = useState<React.ReactNode>();

  const handleIconify = async () => {
    // Call Open API here to classify text
    let iconifiedResult: string = await callAPItoAddLabel(userInput);
    setIconifiedOutput(iconifiedResult);
    // Repace tect with real icons and show to user
    let outputForUser = replaceWithIcons(iconifiedResult);
    setOutputForUser(outputForUser);
  };

  const handleOnChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  const handleCopyToClipBoard = async () => {
    if ("clipboard" in navigator) {
      try {
        await navigator.clipboard.writeText(iconifiedOutput);
        toast.success("Copied", {
          duration: 2000,
          position: "bottom-right",
          icon: "👏",
          style: {
            background: "#1677ff",
            color: "#fff",
          },
        });
        return true;
      } catch (err) {
        console.error("Error copying text to clipboard:", err);
        return false;
      }
    }
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div className="container">
        <div className="app">
          <h1 className="app__title">Iconify your chatwork messages </h1>
          <textarea
            className="app__input"
            placeholder="Paste your chatwork message here 🚀"
            required={true}
            maxLength={1000}
            rows={10}
            onChange={handleOnChangeInput}
          />
          <button className="button" onClick={handleIconify}>
            Iconify ✨
          </button>
          <span className="app__output-header">Iconified result 💥</span>
          {outputForUser ? (
            <div className="app__output">{outputForUser}</div>
          ) : (
            <div className="app__output | place-holder">
              (Results will appear here 😊)
            </div>
          )}
          <button
            className="button button--copy"
            onClick={handleCopyToClipBoard}
          >
            Copy <FaRegCopy />
          </button>
        </div>
      </div>
    </div>
  );
}
