import React from "react";
import { useFont } from "../hooks/useFont";

const FontSwitcher: React.FC = () => {
  // @ts-ignore
  const { font, setFont } = useFont();
  return (
    <select
      value={font}
      onChange={(e) =>
        setFont(e.target.value as "serif" | "sans-serif" | "monospace")
      }
      className="p-2 bg-gray-800 text-white rounded"
    >
      <option className="rounded" value="serif">
        Serif
      </option>
      <option value="sans-serif">Sans-serif</option>
      <option value="monospace">Monospace</option>
    </select>
  );
};
export default FontSwitcher;
