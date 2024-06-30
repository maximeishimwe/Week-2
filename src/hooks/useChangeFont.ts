import { useState, useEffect } from "react";
import { Font } from "../types/types";

function useChangeFont(): [Font, React.Dispatch<React.SetStateAction<Font>>] {
  const [selectedFont, setSelectedFont] = useState<Font>("Mono");

  useEffect(() => {
    // Change font based on selectedFont
    document.body.classList.add(`font-${selectedFont.toLowerCase()}`);

    return () => {
      document.body.classList.remove(`font-${selectedFont.toLowerCase()}`);
    };
  }, [selectedFont]);

  return [selectedFont, setSelectedFont];
}

export default useChangeFont;
