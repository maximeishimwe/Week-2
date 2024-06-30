import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import { Font } from '../types/types';

type FontContextType = {
  selectedFont: Font;
  setSelectedFont: Dispatch<SetStateAction<Font>>;
};

export const FontContext = createContext<FontContextType>({
  selectedFont: 'Mono',
  setSelectedFont: () => {},
});

export const FontProvider: React.FC = ({ children }: React.PropsWithChildren<Record<string, never>>) => {
  const [selectedFont, setSelectedFont] = useState<Font>('Mono');

  return (
    <FontContext.Provider value={{ selectedFont, setSelectedFont }}>
      {children}
    </FontContext.Provider>
  );
};