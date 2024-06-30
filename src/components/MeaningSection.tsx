import { FC } from "react";
import { Meanings, DefinitionObject } from "../types/types";

import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

interface MeaningSectionProps {
  meaning: Meanings;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setRawWordData: React.Dispatch<React.SetStateAction<object>>;
}

const MeaningSection: FC<MeaningSectionProps> = ({
  meaning,
  setIsLoading,
  setRawWordData,
}) => {
  const { partOfSpeech, definitions, synonyms } = meaning;

  // Select the first 3 definitions
  const definitionObjects: DefinitionObject[] = definitions
    ? definitions?.slice(0, 3)
    : [];

  // Select the first 8 synonyms and remove duplicates
  const synonymsSet: string[] = synonyms
    ? Array.from(new Set(synonyms.slice(0, 8)))
    : [];

  return (
    <section className="meaning-section">
      <div className="title">
        <h2>{partOfSpeech}</h2>
        <div className="line"></div>
      </div>

      <div className="meaning">
        <h3>Meaning</h3>
        <Definitions definitionObjects={definitionObjects} />
      </div>

      {synonymsSet.length > 0 && (
        <Synonyms
          synonymsSet={synonymsSet}
          setIsLoading={setIsLoading}
          setRawWordData={setRawWordData}
        />
      )}
    </section>
  );
};

export default MeaningSection;
