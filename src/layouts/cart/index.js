import './Cart.scss';
import Banner from '../../components/banner/Banner';
import Carousel from '../../components/carousel/Carousel'; 
import UsersListCarousel from '../../components/carousel/usersListCarousel'; 
  
const Cart = (props) => {
  return (
    <>
      <div className="seperator s20"></div>
      <section className="app-section">
        <Banner />
      </section>
      <section className="app-section">
        <UsersListCarousel />
      </section>
      <section className="app-section">
        <Carousel heading="Sample carousel" />
      </section>
    </>
  )
}

export default Cart;