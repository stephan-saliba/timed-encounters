type ContainerProps = React.PropsWithChildren<{
  type?: "basic" | "normal" | "golden" | "golden-2";
}>;

const Container: React.FC<ContainerProps> = ({ children, type = "normal" }) => {
  const isNormalType = type === "normal";
  const isBasicType = type === "basic";
  const framedClassSuffix = isNormalType
    ? ""
    : isBasicType
    ? "-grey"
    : "-" + type;

  return (
    <div className={`rpgui-container framed${framedClassSuffix}`}>
      <p>{children}</p>
    </div>
  );
};

export default Container;
