import styles from './styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Car Showroom!</h1>
      <p className={styles.description}>
        Explore our wide range of vehicles, from luxury to economy. Our team is dedicated to helping you find the perfect car for your needs.
      </p>
      <div className={styles.buttonContainer}>
        <a href="/showroom" className={styles.button} aria-label="View our showroom">
          View Showroom
        </a>
      </div>
    </div>
  );
};

export default Home;
