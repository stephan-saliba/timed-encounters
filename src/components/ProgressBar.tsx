import { useEffect, useRef } from "react";

type ProgressBarProps = React.PropsWithChildren<{
  color?: "red" | "blue" | "green";
  progress?: number;
}>;

const ProgressBar: React.FC<ProgressBarProps> = ({
  color = "green",
  progress = 0,
}) => {
  const progressBarRef = useRef(null);
  console.log(progressBarRef.current);
  useEffect(
    function rpguiCreate() {
      console.log(`Create: [${color}], progress: [${progress}]`);
      progressBarRef?.current &&
        RPGUI.create(progressBarRef.current, "progress");
    },
    [progressBarRef, color]
  );

  useEffect(
    function rpguiUpdateColor() {
      console.log(`Update Color: [${color}], progress: [${progress}]`);
      progressBarRef?.current && RPGUI.update(progressBarRef.current);
    },
    [progressBarRef, color]
  );

  useEffect(
    function rpguiUpdateProgress() {
      console.log(
        `Update Progress: color: [${color}], progress: [${progress}]`
      );
      progressBarRef?.current &&
        RPGUI.set_value(progressBarRef.current, progress);
    },
    [progressBarRef, progress]
  );
  return <div className={`rpgui-progress ${color}`} ref={progressBarRef}></div>;
};

export default ProgressBar;
