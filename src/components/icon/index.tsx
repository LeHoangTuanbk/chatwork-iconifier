import React from "react";
import Image from "next/image";
import iconBow from "/public/icons/icon-bow.gif";
import iconThink from "/public/icons/icon-think.gif";
import iconSmile from "/public/icons/icon-smile.gif";
import iconBeer from "/public/icons/icon-beer.gif";
import iconCracker from "/public/icons/icon-cracker.gif";
import iconDance from "/public/icons/icon-dance.gif";
import iconFlex from "/public/icons/icon-flex.gif";
import iconPlease from "/public/icons/icon-please.gif";
import iconRoger from "/public/icons/icon-roger.gif";
import iconWhew from "/public/icons/icon-whew.gif";

const iconBowGif: React.ReactElement = (
  <Image src={iconBow} alt="bow" height={20} width={20} />
);
const iconThinkGif: React.ReactElement = (
  <Image src={iconThink} alt="think" height={20} width={20} />
);
const iconSmileGif: React.ReactElement = (
  <Image src={iconSmile} alt="smile" height={20} width={20} />
);
const iconBeerGif: React.ReactElement = (
  <Image src={iconBeer} alt="beer" height={20} width={20} />
);
const iconCrackerGif: React.ReactElement = (
  <Image src={iconCracker} alt="cracker" height={20} width={20} />
);
const iconDanceGif: React.ReactElement = (
  <Image src={iconDance} alt="dance" height={20} width={20} />
);
const iconFlexGif: React.ReactElement = (
  <Image src={iconFlex} alt="flex" height={20} width={20} />
);
const iconPleaseGif: React.ReactElement = (
  <Image src={iconPlease} alt="please" height={20} width={20} />
);
const iconRogerGif: React.ReactElement = (
  <Image src={iconRoger} alt="roger" height={20} width={20} />
);
const iconWhewGif: React.ReactElement = (
  <Image src={iconWhew} alt="whew" height={20} width={20} />
);

export {
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
};
