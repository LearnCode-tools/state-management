import React from "react";
import { URL_HANDLER } from "../../router/urlHandler";
import "./layout.scss";

interface Props {
  children: React.ReactNode;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

export const Layout = ({ children, path, setPath }: Props) => {
  const navList = ["redux", "reactQuery", "recoil", "zustand"];

  const navSelector = (value?: string) => {
    const name = value || "home";
    URL_HANDLER[name]();
    setPath(`/${name}`);
  };

  return (
    <div className="layout">
      <h1 onClick={() => navSelector()}>State Management Test</h1>
      <hr />
      <nav>
        {navList.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => navSelector(value)}
              className={`/${value}` === path ? "selected" : ""}
            >
              <span>{value}</span>
            </li>
          );
        })}
      </nav>
      <hr />
      <div>{children}</div>
    </div>
  );
};
