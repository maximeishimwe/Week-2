import { FC } from "react";
import fetchWordData from "../utils/fetchWordData";

interface SynonymsProps {
  synonymsSet: string[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setRawWordData: React.Dispatch<React.SetStateAction<object>>;
}

const Synonyms: FC<SynonymsProps> = ({
  synonymsSet,
  setIsLoading,
  setRawWordData,
}) => {
  function searchSynonym(synonym: string) {
    setIsLoading(true);
    fetchWordData(synonym).then((data) => {
      setIsLoading(false);
      setRawWordData(data);
    });
  }

  return (
    <div className="synonyms">
      <h3>Synonyms</h3>
      <div className="synonyms-list">
        {synonymsSet.map((synonym) => (
          <p key={synonym} onClick={() => searchSynonym(synonym)}>
            {synonym}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Synonyms;
