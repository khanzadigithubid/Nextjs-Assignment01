// app/services/repairs/page.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../../styles/Repairs.module.css';
import carRepair from '../../public/image/carrepair.jpg'; // Update the path to your image

const Repairs: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Repair Services</h1>
      <Image 
        src={carRepair} 
        alt="Repair Services" 
        layout="responsive" 
        width={600} // Set the width as needed
        height={400} // Set the height as needed
        className={styles.repairsImage} // Optional: Add a class for additional styling
      />
      <p className={styles.description}>
      🚗✨ Repair Car Services: We provide top-notch car repair services to keep your vehicle running smoothly! Our experienced technicians are dedicated to diagnosing and fixing any issues, from routine maintenance to complex repairs. 🛠️🔧 Whether it’s an oil change, brake service, or engine repair, we ensure quality work and customer satisfaction. Drive with confidence knowing your car is in expert hands! 🌟🚙
      </p>
    </div>
  );
};

export default Repairs;
