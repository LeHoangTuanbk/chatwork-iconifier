"use client";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import addLabel from "@/service/openai-api";
import { replaceWithIcons } from "@/utility";
import SubmitButton from "@/components/submit-button";
import "./styles.scss";

export default function Homepage() {
  const [iconifiedOutput, setIconifiedOutput] = useState<string>();
  const [outputForUser, setOutputForUser] = useState<React.ReactNode>();

  const handleIconify = async (formData: FormData) => {
    try {
      // Set pending to true before starting the API call

      let userInput: string = formData.get("userInput") as string;
      let iconifiedResult = await addLabel(userInput);

      setIconifiedOutput(iconifiedResult as string);

      let outputForUser = replaceWithIcons(iconifiedResult as string);
      setOutputForUser(outputForUser);
    } catch (error) {
      console.error(error);
    } finally {
      // Do something here, whether error or not
    }
  };

  const handleCopyToClipBoard = async () => {
    if ("clipboard" in navigator) {
      try {
        await navigator.clipboard.writeText(iconifiedOutput as string);
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
          <form action={handleIconify}>
            <textarea
              className="app__input"
              placeholder="Paste your chatwork message here 🚀"
              required={true}
              maxLength={1000}
              rows={10}
              name="userInput"
            />
            <SubmitButton />
          </form>
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
