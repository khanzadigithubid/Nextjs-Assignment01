// app/about/page.tsx
import styles from '../styles/About.module.css';
import Image from 'next/image'; // Import the Image component
import car from '../public/image/carAbount.jpg'; // Correct path for your image

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src={car} 
          alt="Our Car Showroom" 
          className={styles.image} 
          layout="responsive" // Makes the image responsive
          priority // Optionally load the image with priority
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to our car showroom! We have a passion for providing the best vehicles to our customers.
          Our collection features a variety of models to suit every preference, from luxury cars to eco-friendly options.
          Visit us to explore our range and find the car of your dreams.
        </p>
      </div>
    </div>
  );
};

export default About;
