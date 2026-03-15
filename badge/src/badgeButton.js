import React from "react";

export default function BadgeButton({ style, label = "Badge" }) {
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to proceed with the link?");
    if (!confirmed) return;
    window.open("https://www.youtube.com/","_blank");
  };

  return (
    <div className="badge-div">
      <button className="badge" onClick={handleClick} style={style}>
        <span className="badgeText">{label}</span>
      </button>
    </div>
  );
}
