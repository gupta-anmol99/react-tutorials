import React from "react";
import { useEffect, useCallback, useState } from "react";

function Card({ nekoImg, nekoFact }) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={nekoImg}
        alt="Loading..."
        className="h-[400px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Interesting Cat Fact</h1>
        <p className="mt-3 text-sm text-gray-600">{nekoFact}</p>
      </div>
    </div>
  );
}

export default Card;
