import React from "react";
import Tea from "./Tea";

const mainTeaList = [
    {
      names: 'Green',
      origin: 'Vietnam',
      price: 1
    },
    {
      names: 'Black',
      origin: 'England',
      price: 2
    },
    {
      names: 'Matcha',
      origin: 'Japan',
      price: 3
    }
  ];  

function TeaList(){
  return (
      <React.Fragment>
        {mainTeaList.map((tea, index) =>
          <Tea names={tea.names}
            origin={tea.origin}
            price={tea.price}
            key={index}/>
        )}
      </React.Fragment>
  );
}

export default TeaList;