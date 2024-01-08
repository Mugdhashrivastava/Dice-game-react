import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
   
    {/* if game started then gameplay otherwise StartGame */}

    {isGameStarted ? <GamePlay />: <StartGame toggle={toggleGamePlay}/>}
  
    </>
  );
}

export default App;
