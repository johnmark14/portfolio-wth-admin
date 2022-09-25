import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-30">
      <div className="flex gap-5 text-4xl">
        <h1 className="text-secondary font-semibold k">K</h1>
        <h1 className="text-white font-semibold r">R</h1>
        <h1 className="text-accent font-semibold s">S</h1>
      </div>
    </div>
  );
}

export default Loader;
