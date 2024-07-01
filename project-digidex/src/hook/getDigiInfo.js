import { useEffect, useState, useCallback } from "react";

function getDigiInfo() {
  const [data, setData] = useState({});

  const fetchDigiData = useCallback(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  useEffect(fetchDigiData, []);

    // useEffect(() => {
    //   fetch("https://digimon-api.vercel.app/api/digimon")
    //     .then((res) => res.json())
    //     .then((res) => setData(res));
    // }, []);

  // We cannot use fetch without useEffect as we need to run fetch only after every component is rendered properly.

 

  let newData = {};

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let item = data[key];
      newData[item.name] = {
        img: item.img,
        level: item.level,
      };
    }
  }

  return newData;
}

export default getDigiInfo;
