import { useState } from 'react';

function Notification({ color = "#ff9710", title = "", content = [], onRemove, removing = false }) {
    const [shouldRemove, setShouldRemove] = useState(false);

    const handleClick = () => {
        setShouldRemove(true);
        setTimeout(() => onRemove(), 300);
    };

    function createContent(content) {
        return Array.isArray(content) 
            ? content.map((element, index) => (
                <span key={index} className="item">{element}</span>
            ))
            : <span className="item">{content}</span>;
    }

    return (
        <div 
            className={`notification ${shouldRemove || removing ? 'remove' : ''}`}
            style={{ '--before-bg-color': color }}
            onClick={handleClick}
        >
            {title && (
                <div className="title">
                    <span>{title}</span>
                </div>
            )}
            <div className="content">
                {createContent(content)}
            </div>
        </div>
    );
}

export default Notification;
