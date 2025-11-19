import React from "react";

export default function Layout3Col({ left, center, right }) {
  return (
    <div className="app-main">
      <div className="layout-3col">
        <aside className="left-col">{left}</aside>
        <main className="center-col">{center}</main>
        <aside className="right-col">{right}</aside>
      </div>
    </div>
  );
}
