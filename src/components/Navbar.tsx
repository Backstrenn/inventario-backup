import * as React from "react";
const Navbar: React.FC = () => {
  return (
    <nav className="text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4">
            <a href="/client">Cliente</a>
            <a href="/fornecedor">Fornecedor</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
