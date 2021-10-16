const Button = ({ className, children, disabled }) => {
  return (
    <div className="container">
      <button
        className={`button ${className ? "green" : ""}`}
        disabled={disabled ? true : false}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
