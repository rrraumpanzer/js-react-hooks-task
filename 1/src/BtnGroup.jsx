import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
    const [activeBtn, setActiveBtn] = useState('');
  
    const handleClick = (button) => {
        setActiveBtn(button);
    };
  
    const leftBtnClass = cn("btn", "btn-secondary", "left", {
        "active": activeBtn === 'l',
    });
  
    const rightBtnClass = cn("btn", "btn-secondary", "right", {
        "active": activeBtn === 'r',
    });
  
    return (
        <div className="btn-group" role="group">
            <button type="button" className={leftBtnClass} onClick={() => handleClick('l')}>Left</button>
            <button type="button" className={rightBtnClass} onClick={() => handleClick('r')}>Right</button>
        </div>
      );
  // END
};

export default BtnGroup;