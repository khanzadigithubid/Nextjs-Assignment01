// app/services/financing/page.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../../styles/Financing.module.css';
import carFinance from '../../public/image/carfinence.jpg'; // Update the path to your image

const Financing: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Financing Services</h1>
      <Image 
        src={carFinance} 
        alt="Financing Options" 
        width={800} // Set the desired width
        height={400} // Set the desired height
        className={styles.financingImage} // Optional: Add a class for additional styling
      />
      <p className={styles.description}>
      💰📊 Finance Services: Our finance services are here to help you navigate the world of vehicle ownership with ease! Whether you are looking to purchase a new car, refinance your current loan, or explore leasing options, our expert team provides tailored solutions to fit your budget. 🏦🚗 We offer competitive rates and flexible payment plans, making it simple for you to get behind the wheel of your dream vehicle. Let us guide you through the financing process so you can drive with confidence! 🌟✨
      </p>
    </div>
  );
};

export default Financing;
