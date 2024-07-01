import { useEffect, useCallback, useState } from "react";

import React from "react";

function useNekoImages(number) {
  const [img, setImg] = useState([
    "https://c4.wallpaperflare.com/wallpaper/433/591/713/anime-anime-girls-nekomimi-wallpaper-preview.jpg",
  ]);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    const img_array = await Promise.all(
      Array.from({ length: number }, async (_, index) => {
        const response = await fetch("https://nekos.best/api/v2/neko");
        const json = await response.json();
        return json.results[0].url;
      })
      
    );
    
    setImg(img_array);
    
    setLoading(false);
  }, [number]);

  useEffect(() => {
    fetchData();
  }, [number]);

  return { img, loading };
}

export default useNekoImages;
