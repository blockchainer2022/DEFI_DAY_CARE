const Button = ({
  children,
  dark = false,
  center = true,
  fsize = "md:text-2xl",
  bg,
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

export const MintButton = ({
  children,
  center = true,
  disabled,
  fsize = "md:text-2xl",
  ...props
}) => (
  <button
    {...props}
    className={`py-2 md:py-3  px-6  md:px-8  mt-6 block mx-auto bg-sky   border-2  text-md ${fsize} rounded  uppercase shadow-xl ${
      disabled
        ? "cursor-default text-gray-400 pointer-events-none border-gray-400 select-none"
        : "text-primary border-white"
    }`}
  >
    {children}
  </button>
);
