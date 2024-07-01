import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import getDigiInfo from "./hook/getDigiInfo";

function App() {
  const [digimon, setDigimon] = useState("Koromon");
  const [digiLevel, setDigiLevel] = useState("In Training");
  const [digiImg, setDigiImg] = useState(
    "https://digimon.shadowsmith.com/img/koromon.jpg"
  );

  const digiInfo = getDigiInfo();

  const options = Object.keys(digiInfo);

  return (
    <>
      <Card
        selectDigimonName={digimon}
        digimonLevel={digiLevel}
        digimonImg={digiImg}
        onNameChange={(digimonName) => {
          setDigimon(digimonName);
          setDigiImg(digiInfo[digimonName]?.img);
          setDigiLevel(digiInfo[digimonName]?.level);
        }}
        digimonOptions={options}
      />
    </>
  );
}

export default App;
