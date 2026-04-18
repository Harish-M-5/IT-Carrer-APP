import React from "react";

function SectionCard({ title, links }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SectionCard;
