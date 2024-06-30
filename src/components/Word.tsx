import { FC } from "react";
import IconPlay from "../assets/images/play.png";

interface WordProps {
  word: string | null | undefined;
  phonetic: string | null | undefined;
  audioURL: string | null | undefined;
}

const Word: FC<WordProps> = ({ word, phonetic, audioURL }) => {
  function playPronunciationAudio() {
    if (!audioURL) return;

    const audio = new Audio(audioURL);
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  }

  return (
    <section className="word-container">
      <div className="word-and-phonetic">
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>

      <button
        onClick={() => playPronunciationAudio()}
        aria-label="Play pronunciation audio"
      >
        {audioURL && <img src={IconPlay} alt="play" />}
      </button>
    </section>
  );
};

export default Word;
