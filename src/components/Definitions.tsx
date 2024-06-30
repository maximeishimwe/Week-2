import { FC } from "react";
import { DefinitionObject } from "../types/types";

interface DefinitionsProps {
  definitionObjects: DefinitionObject[];
}

const Definitions: FC<DefinitionsProps> = ({ definitionObjects }) => {
  return (
    <ul>
      {definitionObjects.map(({ definition, example }) => (
        <li key={definition}>
          <p className="definition">{definition}</p>
          {example && <p className="example">"{example}"</p>}
        </li>
      ))}
    </ul>
  );
};

export default Definitions;
