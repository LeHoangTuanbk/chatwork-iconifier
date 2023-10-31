import React from "react";
import {
  iconBowGif,
  iconThinkGif,
  iconSmileGif,
  iconBeerGif,
  iconCrackerGif,
  iconDanceGif,
  iconFlexGif,
  iconPleaseGif,
  iconRogerGif,
  iconWhewGif,
} from "@/components/icon";

const replaceWithIcons = (text: string) => {
  const replacements: Record<string, React.ReactElement> = {
    "(roger)": iconRogerGif,
    "(flex)": iconFlexGif,
    "(dance)": iconDanceGif,
    "(whew)": iconWhewGif,
    "(think)": iconThinkGif,
    "(please)": iconPleaseGif,
    "(cracker": iconCrackerGif,
    "(beer)": iconBeerGif,
    "(bow)": iconBowGif,
  };
  const pattern = /\(\w+\)/g;

  const textElements = [];
  let match;
  let lastIndex = 0;
  while ((match = pattern.exec(text)) !== null) {
    //Before match index
    const textBeforeMatch = text.slice(lastIndex, match.index);
    if (textBeforeMatch) {
      textElements.push(<span key={lastIndex}>{textBeforeMatch}</span>);
    }

    //Matched text
    const matchedText = match[0];
    const replacement = replacements[matchedText];
    if (replacement) {
      textElements.push(replacement);
    } else {
      textElements.push(
        <span key={lastIndex + matchedText}>{matchedText}</span>
      );
    }
    lastIndex = match.index + matchedText.length;
  }

  //Last text after last match
  const textAfterLastMatch = text.slice(lastIndex);
  if (textAfterLastMatch) {
    textElements.push(<span key={lastIndex}>{textAfterLastMatch}</span>);
  }

  return textElements;
};

export { replaceWithIcons };
