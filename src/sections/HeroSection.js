import { Link } from "react-router-dom";
import { Button } from "../components";
const HeroSection = () => {
  return (
    <section>
      <div className="container ">
        <h1 className="text-white font-semibold text-4xl md:text-6xl mt-20 uppercase mb-10 md:mb-20">
          Become A Babysitter!
        </h1>
        <Link to="/mint">
          <Button>{"< mint now"}</Button>
        </Link>
        <Button>{"claim rewards >"}</Button>
      </div>
    </section>
  );
};

export default HeroSection;
