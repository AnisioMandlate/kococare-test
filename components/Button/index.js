const Button = ({ blue, className, children, disabled }) => {
  return (
    <div className="container">
      <button
        className={`button ${className ? "green" : ""} ${blue ? "blue" : ""}`}
        disabled={disabled ? true : false}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
