import React from "react";
import Logo from '../../assets/images/logo.png'

export const HeaderFooter: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <img src={Logo} alt="Logo" />
        {/* Theme switch and other header elements */}
      </header>
      <footer className="text-center p-4">{/* Footer content */}</footer>
    </>
  );
};
