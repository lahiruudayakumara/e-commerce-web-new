import { Rating } from '@mui/material'
import productImg from '../../src/assets/images/arm-chair-01.jpg'

import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProductCard = () => {
  return (
    <div className="product__item">
        <div className="product__img">
            <img src={productImg} alt='place-holder-img' />
        </div>
        <h3 className="product__name">ModernAmerchair</h3>
        <span>Chair</span>
        <div className="product__card-bottom">
            <span className="price">$299</span>
            <span><AddCircleIcon /></span>
            <Rating defaultValue={2.5} precision={0.5} readOnly/>
        </div>
    </div>
  )
}

export default ProductCard