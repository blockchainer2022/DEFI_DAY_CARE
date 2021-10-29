const Button = ({
  children,
  dark = false,
  center = true,
  fsize = "md:text-2xl",
}) => (
  <button
    className={`py-2 md:py-4  px-4  md:px-8 block ${
      center ? "mx-auto" : null
    } mt-6 ${
      dark ? "bg-dark" : "bg-primary"
    }  border-2 border-white text-white text-md ${fsize} rounded-full uppercase shadow-2xl`}
  >
    {children}
  </button>
);

export default Button;
