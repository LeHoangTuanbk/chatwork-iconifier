"use client";
import React, { useState } from "react";
import "./styles.scss";
import { FaRegCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const textareaMaxLength = 1000;
const textareaRows = 10;

export default function Homepage() {
  const fakeResult = `お疲れ様です。
これからのことを真剣に考えてくれてありがとうございます。(bow)
  
今からでも大丈夫です。
D室も、会議室も使用中なので、廊下のテーブルでよろしいでしょうか？(think)`;

  const [iconifiedOutput, setIconifiedOutput] = useState<any>(``);

  const handleIconify = async () => {
    // Call Open API here to classify text

    // Set output
    let output = replaceWithIcons(fakeResult);
    console.log(output);
    setIconifiedOutput(output);
    // Show output to user
  };

  const replaceWithIcons = (text: string) => {
    // Define your replacement rules here
    const replacements: Record<string, string> = {
      "(bow)": `<span className="icon-bow" role="img" aria-label="Bowing Icon">
          🙇‍♂️
        </span>`,
      "(think)": `<span className="icon-think" role="img" aria-label="Thinking Icon">
          🤔
        </span>`,
    };

    // Use regular expression to find and replace patterns
    const pattern = /\(\w+\)/g;
    const modifiedText = text.replace(
      pattern,
      (match) => replacements[match] || match
    );

    return modifiedText;
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
            className="textarea"
            placeholder="Paste your chatwork message here 🚀"
            required={true}
            maxLength={textareaMaxLength}
            rows={textareaRows}
          />
          <div className="">
            <button className="button" onClick={handleIconify}>
              Iconify ✨
            </button>
          </div>
          <span>Iconified result 💥</span>
          <textarea
            value={iconifiedOutput}
            className="textarea"
            readOnly={true}
            placeholder="(Results will appear here 😊)"
            maxLength={textareaMaxLength}
            rows={textareaRows}
          ></textarea>
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
