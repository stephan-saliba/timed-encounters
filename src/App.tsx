import styled from "styled-components";
import ProgressBar from "./components/ProgressBar";

const Root = styled.main`
  background-color: #222;
  height: 100vh;
  color: white;
`;

function App() {
  return (
    <Root>
      Hello world!
      <ProgressBar />
    </Root>
  );
}

export default App;
