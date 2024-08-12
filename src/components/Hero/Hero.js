import React from 'react'
import css from './Hero.module.css'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import HeroImg from '../../assets/hero.png'
import {motion} from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'

const Hero = () => {

    const transition= {duration: 3,type:"spring"}
  return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>Skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy Collections</span>
                    <span> Seedly say has suitable disposal and boy ,
                        Exercise joy man chi rejected.
                    </span>    
                </div>
             </div>
             {/* middle side */}
             <div className={css.wrapper}>
                <motion.div
                initial = {{bottom:"2rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}

                 className={css.bluecircle} ></motion.div>
                    <motion.img
                    transition={transition}
                    initial={{bottom:"-2rem"}}
                    whileInView={{bottom:"0rem"}}
                    src={HeroImg} alt='' width={600}/>

                    <motion.div
                    transition={transition}
                    initial={{right:"5%"}}
                    whileInView={{right:"2%" }}
                     className={css.cart2}>
                        <RiShoppingBagFill/>
                        <div className={css.signup}>
                            <span>Best Signup Offers</span>
                            <div>
                                <BsArrowRight/>
                            </div>
                        </div>
                    </motion.div>
             </div>
             {/* Right Side  */}

             <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span className={css.mil}>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span> 100k</span>
                    <span>Happy Customers</span> </div>
             </div>
        </div>
  )
}

export default Hero
