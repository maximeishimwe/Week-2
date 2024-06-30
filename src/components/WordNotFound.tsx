import { FC } from "react";
import { WordDataNotFound } from "../types/types";
import NotFound from "../assets/images/not-found.png";

interface WordNotFoundProps {
  wordDataResponse: WordDataNotFound | undefined;
}

const WordNotFound: FC<WordNotFoundProps> = ({ wordDataResponse }) => {
  if (!wordDataResponse) return null;

  const { title } = wordDataResponse;
  const message = `${wordDataResponse.message} ${wordDataResponse.resolution}`;

  return (
    <section className="word-not-found">
      <div className="not-found">
        <img src={NotFound} alt="word not found" />
      </div>
      <h1>{title}</h1>
      <p>{message}</p>
    </section>
  );
};

export default WordNotFound;
