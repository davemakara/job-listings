import styles from "./JobCard.module.css";

const JobCard = ({ item }) => {
  return (
    <div className={styles["info-box-wrapper"]}>
      <span className={styles["img-wrapper"]}>
        <img src={item.image} />
      </span>
      <div>
        <h4>{item.name}</h4>
        <h2>{item.vacancy}</h2>
        <div className={styles["info-box"]}>
          <p>{item.date}</p>
          <span className={styles.dot}></span>
          <p>{item.type}</p>
          <span className={styles.dot}></span>
          <p>{item.country}</p>
        </div>
      </div>
      <ul className={styles["card-skills"]}>
        {item.skills.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
