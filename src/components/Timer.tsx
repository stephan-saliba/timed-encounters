import Container from "./Container";
import ProgressBar from "./ProgressBar";

type TimerProps = {
  name: string;
  duration: number;
  elapsed: number;
};

const Timer: React.FC<TimerProps> = ({ name, duration, elapsed }) => {
  return (
    <Container>
      <input value={name} placeholder="Enter a name"></input>
      <ProgressBar progress={elapsed / duration} />
    </Container>
  );
};

export default Timer;
