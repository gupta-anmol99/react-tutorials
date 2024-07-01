import React from "react";
import { useEffect, useCallback, useState } from "react";

function useNekoFacts(number) {
  const [nekoData, setNekoData] = useState(["Cats are good"]);
  const [factLoading, setFactLoading] = useState(true);

  const fetchData = useCallback(() => {
    fetch(`https://meowfacts.herokuapp.com/?count=${number}`)
      .then((res) => res.json())
      .then((res) => {
        setNekoData(res.data);
        setFactLoading(false);
      });
  }, [number]);

  useEffect(() => fetchData(), [fetchData]);

  return { nekoData, factLoading };
}

export default useNekoFacts;
