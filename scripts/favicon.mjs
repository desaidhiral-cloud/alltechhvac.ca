import { writeFileSync } from "node:fs";
import React from "react";
import { ImageResponse } from "next/og.js";

const size = 48;

const image = new ImageResponse(
  React.createElement(
    "div",
    {
      style: {
        width: `${size}px`,
        height: `${size}px`,
        background: "#071833",
        borderRadius: "10px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        position: "relative",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-end",
          gap: "2px",
          marginBottom: "8px",
        },
      },
      React.createElement("div", {
        style: { width: "7px", height: "14px", background: "#7EB6EA", borderRadius: "1px" },
      }),
      React.createElement("div", {
        style: { width: "9px", height: "24px", background: "#ffffff", borderRadius: "1px" },
      }),
      React.createElement("div", {
        style: { width: "7px", height: "17px", background: "#1AA3E8", borderRadius: "1px" },
      }),
    ),
    React.createElement("div", {
      style: {
        position: "absolute",
        top: "7px",
        right: "8px",
        width: "6px",
        height: "6px",
        borderRadius: "99px",
        background: "#49C4F3",
      },
    }),
  ),
  { width: size, height: size },
);

const png = Buffer.from(await image.arrayBuffer());
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(size, 0);
entry.writeUInt8(size, 1);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(png.length, 8);
entry.writeUInt32LE(22, 12);

writeFileSync(new URL("../app/favicon.ico", import.meta.url), Buffer.concat([header, entry, png]));
console.log("wrote app/favicon.ico", png.length);
