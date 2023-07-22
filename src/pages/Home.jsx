import { NavLink } from 'react-router-dom'
import Helmet from "../components/Helmet/Helmet"
import heroImg from '../../src/assets/images/hero-img.png'
import './home.css'
import Services from '../Sevices/Services'
import { ProductList } from '../UI/ProductList'

const Home = () => {

  const year =  new Date().getFullYear()

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <div className="container w-full">
          <div className="row">
            <div className="column">
              <div className="hero__content">
                <p className="hero__subtitle">
                  Trendig products in {year}
                </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="shop__btn"><NavLink to='/Shop'>SHOP NOW</NavLink></button>
              </div>
            </div>
            <div className="column">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="trending__product">
        <div className="container w-full">
          <div className="row">
            <div className="column">
              <h2 className='section__title'></h2><br/>
            </div>
            <ProductList />
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default Home
