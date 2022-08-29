type ButtonProps = React.PropsWithChildren<{
  type?: "golden";
}>;

const Button: React.FC<ButtonProps> = ({ children, type = "" }) => {
  return (
    <button className={"rpgui-button " + type}>
      <p>{children}</p>
    </button>
  );
};

export default Button;
