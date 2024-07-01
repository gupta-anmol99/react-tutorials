import React from "react";

function Card({
  selectDigimonName = "Koromon",
  digimonLevel = "In Training",
  digimonImg = "https://digimon.shadowsmith.com/img/koromon.jpg",
  onNameChange,
  digimonOptions = [],
}) {
  return (
    <>
      <div className="w-1/2">
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="text"
          placeholder="Digimon Name"
          value={selectDigimonName}
        //   onChange={(e) => onNameChange && onNameChange(Number(e.target.value))}
          readOnly
        />
      </div>
      <div className="w-[300px] rounded-md border">
        <img
          src={digimonImg}
          alt="Digimon"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{selectDigimonName}</h1>
          <p className="mt-3 text-sm text-gray-600">{digimonLevel}</p>
        </div>
      </div>

      <div>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectDigimonName}
          onChange={(e) => onNameChange && onNameChange(e.target.value)}
        >
          {digimonOptions.map((digimon) => (
            <option key={digimon} value={digimon}>
              {digimon}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Card;
