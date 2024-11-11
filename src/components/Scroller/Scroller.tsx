import React from "react";

interface ScrollerProps {
  image: string;
  title: string;
}

const Scroller: React.FC<ScrollerProps> = ({ image, title }) => {
  return (
    <div className="mx-2">
      <img
        src={image}
        alt={title} // Set alt text to the title for better accessibility
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // or 'contain' based on your needs
        }}
      />
      <div className="text-center mt-2">{title}</div>{" "}
      {/* Optional styling for title */}
    </div>
  );
};

export default Scroller;
