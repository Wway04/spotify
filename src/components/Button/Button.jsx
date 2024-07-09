import "./Button.scss";
function Button({ children, type = "primary", className, onClick }) {
  return (
    <div className="button">
      <button className={`btn-spotify ${type} ${className}`} onClick={onClick}>
        <span className="content">{children}</span>
      </button>
    </div>
  );
}

export default Button;
