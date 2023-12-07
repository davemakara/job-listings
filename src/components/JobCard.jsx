import styles from "./JobCard.module.css";

const JobCard = ({ item }) => {
  return (
    <div>
      <img src={item.image} />
      <h4>{item.name}</h4>
      <h2>{item.vacancy}</h2>
      <p>{item.date}</p>
      <p>{item.type}</p>
      <p>{item.country}</p>
      <ul>
        {item.skills.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
