import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/SingleCar.module.css';
import car1 from '../../public/image/car1.jpg';
import car2 from '../../public/image/car2.jpg';
import car3 from '../../public/image/car3.jpg';
import car4 from '../../public/image/car4.jpg';
import car5 from '../../public/image/car5.jpg';
import car6 from '../../public/image/car6.jpg';
import Link from 'next/link';

// Define the car data type with StaticImport for the image type
type Car = {
  name: string;
  image: StaticImageData;
  description: string;
};

// Define the cars object with explicit keys and car data
const cars: Record<string, Car> = {
  '1': {
    name: 'Corolla Car',
    image: car1,
    description:
      'The Toyota Corolla 🚗 is a dependable compact car celebrated for its fuel efficiency 💨 and sleek design ✨. It features a comfortable interior with modern technology 📱 and safety features, ensuring a smooth driving experience. Known for its reliability, the Corolla is an excellent choice for everyday use! 🌟',
  },
  '2': {
    name: 'Civic Car',
    image: car2,
    description:
      'The Honda Civic is a compact car renowned for its reliability, fuel efficiency, and sporty design 🚗💨. Available in various body styles, including sedan, coupe, and hatchback, it features a sleek exterior with bold lines and an aerodynamic shape. Inside, the Civic offers a spacious and comfortable cabin equipped with modern technology 📱, including a user-friendly infotainment system and advanced safety features. With responsive handling and a choice of efficient engines, the Honda Civic delivers an engaging driving experience, making it a popular choice for both daily commuters and driving enthusiasts! 🌟',
  },
  '3': {
    name: 'Haval Car',
    image: car3,
    description:
      'Haval cars are popular for their stylish designs, advanced technology, and spacious interiors. Known for their robust performance and off-road capabilities, Haval SUVs offer features like modern infotainment systems 📱, comprehensive safety options, and comfortable seating, making them ideal for both city driving and adventure. With a focus on quality and value, Haval aims to provide a reliable driving experience while appealing to a wide range of consumers looking for practicality and style in their vehicles. 🚙✨',
  },
  '4': {
    name: 'Tayto Car',
    image: car4,
    description:
      'The Tayto Car is a whimsical and eye-catching vehicle designed to promote Tayto crisps 🍟. Often brightly colored with the brand\'s logo and iconic mascot, Mr. Tayto, it captures attention wherever it goes 🚗✨. This unique vehicle not only serves as a marketing tool but also embodies the fun and playful spirit of the Tayto brand, often participating in events and parades to engage with fans and create memorable experiences! 🎉',
  },
  '5': {
    name: 'Car Sports',
    image: car5,
    description:
      'The Toyota Corolla Sports is a dynamic compact car that merges style with performance, designed for driving enthusiasts 🚗💨. With a sporty exterior featuring aggressive lines and a bold front grille, it exudes a sense of excitement. Inside, it offers a driver-focused cockpit with advanced technology 📱 and supportive seating, ensuring a thrilling driving experience. Known for its responsive handling and lively engine options, the Corolla Sports delivers an exhilarating ride that keeps you connected to the road! 🌟',
  },
  '6': {
    name: 'Electric Car',
    image: car6,
    description:
      'The Electric is an eco-friendly compact car that combines reliability with zero-emission driving 🌱. With a sleek and modern design 🚗, it features a spacious interior equipped with the latest technology 📱 and advanced safety systems. Known for its impressive range and efficient performance ⚡, the Corolla Electric is an excellent choice for those looking to reduce their carbon footprint while enjoying a smooth and comfortable ride! 🌍',
  },
};

// Dynamic component for car details
const CarDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const car = cars[id];

  // Handle the case where the car ID is not found
  if (!car) {
    return <p className={styles.error}>Car not found.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={car.image}
          alt={car.name}
          layout="responsive"
          width={300}
          height={200}
          className={styles.carImage}
        />
      </div>
      <div className={styles.descriptionWrapper}>
        <h1 className={styles.title}>{car.name}</h1>
        <p className={styles.description}>{car.description}</p>
        <div className={styles.backButtonWrapper}>
          <Link href="/showroom" className={styles.backButton}>Back to Showroom</Link>
        </div>
      </div>
    </div>

  );
};

export default CarDetails;
