import { useState } from 'react';

function Tooltip({ text = "Tooltip", align = "bottom", children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div className={`tooltip ${align} ${visible ? 'visible' : ''}`}>
        <span className="tooltip-text">{text}</span>
      </div>
    </div>
  );
}

export default Tooltip;