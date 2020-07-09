import axios from 'axios';
import Banner from '../components/Jewelry/Banner';
import CategoryBanner from '../components/Jewelry/CategoryBanner';
import baseUrl from '../utils/baseUrl';

const Jewelry = ({ products }) => {
  return (
    <React.Fragment>
      <Banner />
      <CategoryBanner />
    </React.Fragment>
  );
};

export default Jewelry;
