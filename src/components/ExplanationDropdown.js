import React, { useState } from 'react';

import styles from '../css/ExplanationDropdown.module.css'

function ExplanationDropdown({json}) {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className={`${styles["dropdown-container"]}`}>
      <div className={`${styles["button-row"]}`}>
        {json.display ? (
          <button
            onClick={() => toggleDropdown()}
            title={isOpen ? `Hide ${json.title}` : `Show ${json.title}`}
            // className='secondary'
                    className={`${styles["accent-border"]}`}
          >
            <span>
              <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
            </span>
            {isOpen ? `${json.title}` : `${json.title}`}
          </button>
        ) : null }
      </div>

      <div
        className={`${styles["dropdown-content"]} ${isOpen ? styles.open : 'hidden'}`}
      >
          <>
            <img
              className={`${styles["dropdown-image"]}`}
              src={`${process.env.PUBLIC_URL}/images/${json.image}`}
              alt=""
            />
            <div className={`${styles["dropdown-text"]}`}>
                <h5>{json.title}</h5>
                <p>{json.description}</p>
            </div>
          </>
      </div>
    </div>
  );
}

export default ExplanationDropdown;
