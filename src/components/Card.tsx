const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="rpgui-container framed-golden">
      <p>{children}</p>
    </section>
  );
};

export default Card;
