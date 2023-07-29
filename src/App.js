import { useState } from "react";
import "./App.css";
import { items } from "./data/items";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex) => {
    setExpandedIndex((current) => {
      if (current === nextIndex) {
        return -1;
      }
      return nextIndex;
    });
  };

  return (
    <div className="main">
      <div className="content">
        <img src="/faq.jpg" alt="FAQ Image" width={567} height={425} />
        <div className="questions">
          <div className="title">Frequently Asked Questions</div>
          <div className="accodions">
            {items.map((item, index) => {
              const isExpanded = index === expandedIndex;
              const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;
              return (
                <div className="item">
                  <div className="header" onClick={() => handleClick(index)}>
                    <div className="label">{item.label}</div>
                    <div className="icon">{icon}</div>
                  </div>
                  {isExpanded && <div className="text">{item.text}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
