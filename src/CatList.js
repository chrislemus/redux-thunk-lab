import React from 'react';
export default function CatList(props) {
  return (
    <div>
      {props.catPics.map((pic) => (
        <img src={pic.src} />
      ))}
    </div>
  );
}
