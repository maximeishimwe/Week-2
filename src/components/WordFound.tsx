import { FC } from "react";
import { CuratedWordData, Meanings } from "../types/types";

import Word from "./Word";
import MeaningSection from "./MeaningSection";
import Footer from "./Footer";

interface WordFoundProps {
  wordDataResponse: CuratedWordData;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setWordDataResponse: React.Dispatch<React.SetStateAction<any | undefined>>;
}

const WordFound: FC<WordFoundProps> = ({
  wordDataResponse,
  setIsLoading,
  setWordDataResponse,
}) => {
  const { word, phonetic, audioURL, meanings, sourceURL } =
    wordDataResponse || {};

  return (
    <>
      <Word word={word} phonetic={phonetic} audioURL={audioURL} />

      {meanings &&
        meanings.map((meaning: Meanings, index: number) => (
          <MeaningSection
            // @ts-ignore
            key={meaning.partOfSpeech + index}
            meaning={meaning}
            setIsLoading={setIsLoading}
            setRawWordData={
              setWordDataResponse as React.Dispatch<
                React.SetStateAction<object | undefined>
              >
            }
          />
        ))}
      {sourceURL && <Footer sourceURL={sourceURL} />}
    </>
  );
};

export default WordFound;
