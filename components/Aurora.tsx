"use client";

import AuroraUI from "@/components/ui/Aurora_ui";

export default function Aurora() {
  return (
    <AuroraUI
      colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
      blend={0.5}
      amplitude={1.0}
      speed={1}
    />
  );
}