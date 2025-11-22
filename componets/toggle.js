"use client";

import { useTheme } from "next-themes";

export default function Toggle() {
  const { setTheme, theme } = useTheme();
  console.log(theme);

  return (
    <>
      <h1>Toggle</h1>
      <div>
        <button>Turn On</button>
      </div>
    </>
  );
}
