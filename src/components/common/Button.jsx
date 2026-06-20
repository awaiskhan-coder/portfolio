function Button({
  children,
  href,
  variant = "primary",
  icon,
  download = false,
  className = "",
}) {
  const baseStyle =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition duration-300";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    outline:
      "border border-slate-600 hover:border-blue-500 hover:text-blue-400 text-white",

    ghost: "bg-slate-800 hover:bg-slate-700 text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      {icon}
    </button>
  );
}

export default Button;
