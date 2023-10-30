"use client";
import React, { ChangeEvent, useState } from "react";
import "./styles.scss";
import { FaRegCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { iconBowGif, iconThinkGif } from "@/components/icon";
const textareaMaxLength = 1000;
const textareaRows = 10;

export default function Homepage() {
  const fakeInput = `お疲れ様です。
これからのことを真剣に考えてくれてありがとうございます。

今からでも大丈夫です。
D室も、会議室も使用中なので、廊下のテーブルで    よろしいでしょうか？`;

  const fakeResultFromOpenAI = `お疲れ様です。
これからのことを真剣に考えてくれてありがとうございます。(bow)

今からでも大丈夫です。
D室も、会議室も使用中なので、廊下のテーブルでよろしいでしょうか？(think)`;

  const [userInput, setUserInput] = useState<string>("");
  const [iconifiedOutput, setIconifiedOutput] = useState<string>(``);
  const [outputForUser, setOutputForUser] = useState<any>(``);

  const handleIconify = async () => {
    // Call Open API here to classify text
    console.log(userInput);

    // Set output
    setIconifiedOutput(fakeResultFromOpenAI);
    let outputForUser = replaceWithIcons(fakeResultFromOpenAI);
    setOutputForUser(outputForUser);
    console.log(outputForUser);
    // Show output to user
  };

  const replaceWithIcons = (text: string) => {
    // Define your replacement rules here
    const replacements: Record<string, string> = {
      "(bow)": `<span class="icon-bow" role="img" aria-label="Bowing Icon">🙇‍♂️</span>`,
      "(think)": `<span class="icon-think" role="img" aria-label="Thinking Icon">🤔</span>`,
    };

    // Use regular expression to find and replace patterns
    const pattern = /\(\w+\)/g;
    const modifiedText = text.replace(pattern, (match) => replacements[match]);

    return modifiedText;
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
            maxLength={textareaMaxLength}
            rows={textareaRows}
            onChange={handleOnChangeInput}
          />
          <div className="">
            <button className="button" onClick={handleIconify}>
              Iconify ✨
            </button>
          </div>
          <span className="app__output-header">Iconified result 💥</span>
          {outputForUser ? (
            <div
              className="app__output"
              dangerouslySetInnerHTML={{ __html: outputForUser }}
            />
          ) : (
            <div className="app__output | place-holder">
              (Results will appear here 😊)
            </div>
          )}
          <div>{iconThinkGif}</div>
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
