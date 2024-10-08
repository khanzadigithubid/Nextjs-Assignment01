import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Showroom.module.css';
import car1 from '../public/image/car1.jpg';
import car2 from '../public/image/car2.jpg';
import car3 from '../public/image/car3.jpg';
import car4 from '../public/image/car4.jpg';
import car5 from '../public/image/car5.jpg';
import car6 from '../public/image/car6.jpg';

const cars = [
  { id: '1', name: 'Corolla Car', image: car1 },
  { id: '2', name: 'Civic Car', image: car2 },
  { id: '3', name: 'Haval Car', image: car3 },
  { id: '4', name: 'Tayto Car', image: car4 },
  { id: '5', name: 'Sports Car', image: car5 },
  { id: '6', name: 'Electric Car', image: car6 },
];

const Showroom: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Showroom</h1>
      <div className={styles.carList}>
        {cars.map((car) => (
          <div key={car.id} className={styles.carCard}>
            <Image 
              src={car.image} 
              alt={car.name} 
              layout="responsive"
              width={300}
              height={200}
              className={styles.carImage}
            />
            <h2 className={styles.carName}>{car.name}</h2>
            <Link href={`/showroom/${car.id}`} passHref>
              <button className={styles.detailsButton}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showroom;
