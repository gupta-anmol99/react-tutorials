import React from "react";

// function Card(props) {
//     console.log(props)
//   return (
//     <div className="w-[400px] rounded-md border justify-center">
//         <img
//           src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
//           alt="Laptop"
//           className="h-[200px] w-full rounded-md object-cover"
//         />
//         <div className="p-4">
//           <h1 className="text-lg font-semibold">About {props.Obj.name}</h1>
//           <p className="mt-3 text-sm text-gray-600">
//             {props.Obj.name} has the ID of {props.Obj.id}
//           </p>
//           <button
//             type="button"
//             className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//           >
//             Read
//           </button>
//         </div>
//       </div>
//   )
// }

// One way is to use the above and another is to use destructuring like the below example

function Card({ Obj }) {
  return (
    <div className="w-[400px] rounded-md border justify-center">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">About {Obj.name}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {Obj.name} has the ID of {Obj.id}
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
}

export default Card;
