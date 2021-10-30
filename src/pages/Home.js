import React from "react";
import { Layout } from "../components";
import { HeroSection } from "../sections";

const Home = () => {
  return (
    <div className="home">
      <Layout>
        <HeroSection />
      </Layout>
    </div>
  );
};

export default Home;
