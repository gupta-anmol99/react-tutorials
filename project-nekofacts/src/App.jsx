import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import useNekoFacts from "./hooks/useNekoFacts";
import useNekoImages from "./hooks/useNekoImages";

function App() {
  const [num, setNum] = useState(0);

  const { nekoData: facts, factLoading: factsLoading } = useNekoFacts(num);
  const { img: imgs, loading: imagesLoading } = useNekoImages(num);

  const isLoading = imagesLoading || factsLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!isLoading) {
    const cards = Array.from({ length: num }, (_, index) => (
      <Card key={index} nekoImg={imgs[index]} nekoFact={facts[index]} />
    ));

    const onNumberChange = (x) => {
      setNum(x);
    };

    return (
      <>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="number"
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="Number of Facts"
            max={5}
            min={1}
            onChange={(e) => onNumberChange(Number(e.target.value))}
          />
        </div>
        <div className=" flex flex-wrap card-container">{cards}</div>
      </>
    );
  }

}

export default App;
