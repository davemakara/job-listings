import React, { useState } from "react";

import styles from "./SkillsWrapper.module.css";

import { SKILLS } from "../store/skills";

const SkillsWrapper = ({ selecting }) => {
  const [clickedItems, setClickedItems] = useState([]);

  const clickHandler = (index, skill) => {
    setClickedItems((prev) => {
      const newItems = prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index];

      return newItems;
    });

    selecting(skill);
  };

  return (
    <div className={styles["skills-wrapper"]}>
      <ul>
        {SKILLS.map((skill, index) => (
          <span
            key={index}
            id={`item-${index}`}
            className={`${styles["skills-btn"]} ${
              clickedItems.includes(index) ? styles["btn-clicked"] : ""
            }`}
            onClick={() => clickHandler(index, skill)}
          >
            {skill}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default SkillsWrapper;
