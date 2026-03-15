import React from "react";
import  "./Badge.css"
import BadgeButton from './badgeButton';

export default function App() {
  const buttonStyles = [
    {background:'#F3F4F6'},
    {background:'#FEE2E2'},
    {background:'#FEF3C7'},
    {background:'#D1FAE5'},
    {background:'#DBEAFE'},
    {background:'#E0E7FF'},
    {background:'#EDE9FE'},
    {background:'#FCE7F3'},
  ]
  return (
    <>
      <div className="headline">
        <h1>BADGES</h1>  
      </div>
      <div className="App">
        {buttonStyles.map((style, index) => (
          <BadgeButton
            key={index}
            style={style}
            // label={`Badge ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
