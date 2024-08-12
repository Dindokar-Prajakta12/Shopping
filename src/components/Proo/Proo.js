import React, { useState } from 'react'
import css from './Proo.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react';


const Proo = () => {

  const[parent] = useAutoAnimate()
  const [MenuProducts , setMenuProducts] = useState(ProductsData);
     
  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type))
  }
  return (
    <div className={css.container}>
      <img src={Plane} alt=''/>
      <h1>Our featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>ALL</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          {/* <li onClick={() => filter("CONDITIONER")}>Conditioner</li> */}
          {/* <li onClick={() => filter("FOUNDATION")}>Foundation</li> */}
          <li onClick={() => filter("CONDITIONER")}>CONDITIONER</li>
          <li onClick={() => filter("FOUNDATION")}>FOUNDATION</li>

        </ul>
        <div className={css.list} ref={parent}>
          {
            MenuProducts.map((product, i) =>(
              <div className={css.product}>
              <div className="left-s">
                <div className='name'>
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div> Shop Now</div>
              </div>
              <img src={product.img} alt='' className='img-p'></img>

              </div>
            ))
          }
        </div>
      </div>
     
    </div>
  )
}

export default Proo
