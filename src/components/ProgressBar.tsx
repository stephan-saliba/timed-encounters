type ProgressBarProps = React.PropsWithChildren<{
  color?: "red" | "blue" | "green";
  progress?: number;
}>;

const ProgressBar: React.FC<ProgressBarProps> = ({
  color = "green",
  progress = 0,
}) => {
  return (
    <div className={`rpgui-progress`}>
      <div className="rpgui-progress-track">
        <div className={`rpgui-progress-fill ${color}`} style={{width: `${progress * 100}%`}}/>
      </div>
      <div className="rpgui-progress-left-edge" />
      <div className="rpgui-progress-right-edge" />
    </div>
  );
};

export default ProgressBar;