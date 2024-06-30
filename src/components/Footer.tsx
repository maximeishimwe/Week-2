import { FC } from "react";
import LinkIcon from "../assets/images/tabler_external-link.png";

interface FooterProps {
  sourceURL: string;
}

const Footer: FC<FooterProps> = ({ sourceURL }) => {
  const shortenedURL = sourceURL.replace("https://", "").replace("http://", "");

  return (
    <footer>
      <div className="line"></div>

      <div className="source">
        <p>Source</p>
        <span>
          <a href={sourceURL} target="_blank" rel="noreferrer">
            {shortenedURL}
          </a>

          <img src={LinkIcon} alt="link" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
