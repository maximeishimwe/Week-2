import { useEffect, useState } from "react";
import curateWordData from "../utils/curateWordData";
import {
  CuratedWordData,
  WordDataResponse,
  WordDataNotFound,
} from "../types/types";

function useCurateWordData(
  wordDataResponse: WordDataResponse[] | WordDataNotFound | undefined
): CuratedWordData | undefined {
  const [curatedWordData, setCuratedWordData] = useState<CuratedWordData>();

  useEffect(() => {
    if (Array.isArray(wordDataResponse)) {
      // If the data is an array, it means that the word was found
      setCuratedWordData(curateWordData(wordDataResponse));
    } else {
      // If no data is found, set the state to undefined
      setCuratedWordData(undefined);
    }
  }, [wordDataResponse]);

  if (curatedWordData) {
    return curatedWordData;
  } else {
    return undefined;
  }
}

export default useCurateWordData;
