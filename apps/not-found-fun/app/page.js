"use client";

import { notFound } from "next/navigation";
import { useState } from "react";

export default function Main() {
  const [found, setFound] = useState(true);
  if (!found) {
    notFound();
  }
  return (
    <button
      onClick={() => {
        setFound(false);
      }}
    >
      is it found
    </button>
  );
}
