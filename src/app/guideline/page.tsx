"use client";
import React from "react";
import AppHeading from "@/components/app-heading";
import ReactPlayer from "react-player/youtube";
import "./guideline.scss";
import {
  iconBowGif,
  iconThinkGif,
  iconBeerGif,
  iconCrackerGif,
  iconDanceGif,
  iconFlexGif,
  iconPleaseGif,
  iconRogerGif,
  iconWhewGif,
} from "@/components/icon";
import Link from "next/link";

export default function GuideLine() {
  return (
    <div className="container">
      <div className="app">
        <AppHeading />
        <div className="guideline">
          <div className="guideline__supported-icons">
            <span className="guideline__heading">
              This app supports adding 9 labels in chatwork.
            </span>
            <ol className="guideline__icon-list">
              <li>{iconBowGif}</li>
              <li>{iconThinkGif}</li>
              <li>{iconBeerGif}</li>
              <li>{iconCrackerGif}</li>
              <li>{iconDanceGif}</li>
              <li>{iconFlexGif}</li>
              <li>{iconPleaseGif}</li>
              <li>{iconRogerGif}</li>
              <li>{iconWhewGif}</li>
            </ol>
          </div>
          <div className="guideline__demo-text">Demo video</div>
          <div className="player-wrapper">
            <ReactPlayer
              className="guideline__demo-video"
              url="https://youtu.be/kBkCZGeBAd0"
              controls
              width="100%"
              height="100%"
            />
          </div>
          <Link className="link" href="/">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
