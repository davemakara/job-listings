import Header from "./components/Header";
import JobCard from "./components/JobCard";
import SkillsWrapper from "./components/SkillsWrapper";

import { COMPANIES } from "./store/skills";

function App() {
  return (
    <div className="App">
      <Header />
      <SkillsWrapper />
      <section>
        <ul>
          {COMPANIES.map((el) => (
            <JobCard item={el} key={el.id} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
