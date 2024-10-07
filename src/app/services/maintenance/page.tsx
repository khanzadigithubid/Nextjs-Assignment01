// app/services/maintenance/page.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../../styles/Maintenance.module.css';
import carMaintenance from '../../public/image/carmaintenance.jpg'; // Update the path to your image

const Maintenance: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Maintenance Services</h1>
      <Image 
        src={carMaintenance} 
        alt="Maintenance Services" 
        layout="responsive" 
        width={600} // Set the width as needed
        height={400} // Set the height as needed
        className={styles.maintenanceImage} // Optional: Add a class for additional styling
      />
      <p className={styles.description}>
      🔧🌟 Maintenance Services: Our comprehensive maintenance services are designed to keep your vehicle in peak condition! Regular check-ups and preventative care are essential for prolonging the life of your car. 🛠️🚗 From oil changes and tire rotations to fluid checks and brake inspections, our skilled team ensures your vehicle runs safely and efficiently. 🚙💨 Trust us to provide reliable service and expert advice so you can enjoy a smooth ride every time! 🛡️✨
      </p>
    </div>
  );
};

export default Maintenance;
