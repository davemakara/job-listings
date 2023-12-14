import React, { useState } from "react";

import Header from "./components/Header";
import JobCard from "./components/JobCard";
import SkillsWrapper from "./components/SkillsWrapper";

import styles from "./App.module.css";

import { COMPANIES } from "./store/skills";

function App() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const SelectingSkill = (skillItem) => {
    setSelectedSkills((prev) => {
      const newSkillsArray = prev.includes(skillItem)
        ? prev.filter((item) => item !== skillItem)
        : [...prev, skillItem];

      return newSkillsArray;
    });
  };

  let renderedCard;

  if (selectedSkills.length === 0) {
    renderedCard = (
      <ul>
        {COMPANIES.map((el) => (
          <JobCard item={el} key={el.id} />
        ))}
      </ul>
    );
  }

  if (selectedSkills.length > 0) {
    const filteredCompanies = COMPANIES.filter((comp) => {
      return selectedSkills.every((selSkill) => comp.skills.includes(selSkill));
    });

    if (filteredCompanies.length > 0) {
      renderedCard = (
        <ul>
          {filteredCompanies.map((el) => (
            <JobCard item={el} key={el.id} />
          ))}
        </ul>
      );
    } else {
      renderedCard = (
        <div className={styles["no-match-caption-wrapper"]}>
          <h2 className={styles["no-match-caption"]}>
            No matching jobs found.
          </h2>
          <h3>Please try another combination.</h3>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Header />
      <SkillsWrapper selecting={SelectingSkill} />
      <section className={styles["main-wrapper"]}>{renderedCard}</section>
    </div>
  );
}

export default App;
