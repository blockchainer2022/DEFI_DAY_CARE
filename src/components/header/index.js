import React from "react";
import Button from "../button";
const Index = () => {
  return (
    <header className="">
      <div className="container p-4">
        <a href="https://defidaycare.io/" target="_blank" rel="noreferrer">
          <Button dark center={false} fsize={"xl"}>
            {"Back to Homepage"}
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Index;
