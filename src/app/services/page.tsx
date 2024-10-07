// app/services/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from '../styles/Services.module.css';
import carFinance from '../public/image/carfinence.jpg'; // Ensure correct spelling of the variable
import carMaintenance from '../public/image/carmaintenance.jpg'; // Ensure this image exists
import carRepair from '../public/image/carrepair.jpg';

// Define an array of services with titles, descriptions, and images
const services = [
  {
    title: 'Financing Services',
    description: 'Explore various financing options tailored to your needs.',
    link: '/services/financing',
    image: carFinance, // Include the corresponding image
  },
  {
    title: 'Maintenance Services',
    description: 'Keep your vehicle in top condition with our maintenance services.',
    link: '/services/maintenance',
    image: carMaintenance, // Include the corresponding image
  },
  {
    title: 'Repair Services',
    description: 'Get your vehicle repaired by our expert technicians.',
    link: '/services/repairs',
    image: carRepair, // Include the corresponding image
  },
];

const Services: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <Image 
              src={service.image} 
              alt={service.title} 
              layout="responsive" 
              width={400} // Set the width as needed
              height={250} // Set the height as needed
              className={styles.serviceImage} // Add a class for additional styling if needed
            />
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
            <Link href={service.link} className={styles.serviceLink}>Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
