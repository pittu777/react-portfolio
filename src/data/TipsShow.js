import React from 'react';
import tipsData from "./Tips.json"

const Tips = ({ language }) => {
  const tips = tipsData[language];

  return (
    <div>
      <h2>{tips.title}</h2>
      <p>{tips.content}</p>
    </div>
  );
};

export default Tips;
