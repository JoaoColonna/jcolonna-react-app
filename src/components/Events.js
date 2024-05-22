import React from "react";
import { Button } from "react-bootstrap";

// export function Button() {
//   function handleClick(){
//     alert('YOu clicked me!');  
//   }
//   return (
//     <>
//       <button onClick={handleClick}>
//         I don't do anything
//       </button>
//       <button onClick={function handleClick1(){
//         alert('YOu clicked me!');
//       }}>
//         I don't do anything
//       </button>
//       <button onClick={() => {
//         alert('YOu clicked me!');
//       }}>
//         I don't do anything
//       </button>
//     </>
//   );
// }

export function AlertButton({ onClick, children}) {
  return (
    <>
      <Button onClick={e => { 
        e.stopPropagation(); 
        onClick(); 
      }}> 
        {children}
      </Button>
    </>
  );
}

export default function Toolbar() {
  return (
    <>
      <div className="Toolbar" onClick={() => {
        alert("You clicked on the toolbar!");
      }}>
        <h5>Componente Toolbar</h5>
        <AlertButton onClick={() => { alert("Playing!") }}>
          Play Movie
        </AlertButton>
        <AlertButton onClick={() => alert("Uploading!")}>
          Upload Image
        </AlertButton>
      </div>
      <div>
        {/* <Gallery /> */}
      </div>
    </>  
  )
} 

