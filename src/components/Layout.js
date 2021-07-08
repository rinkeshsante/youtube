import React, { useState } from "react";
import MyDrawer from "./MyDrawer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [Expanded, setExpanded] = useState(true);
  return <div>{children}</div>;
}
