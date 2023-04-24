import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import logo from "../public/img/logo.png"
import {AiOutlinePhone} from "react-icons/ai"
import Head from "next/head"

const Navbar = () => {
  return (
    <div className ={styles.container}>
        <div className ={styles.item}>
          <div className={styles.phone}>
            <AiOutlinePhone/>
          </div>
           <div className = {styles.texts}>
            <div className={styles.text}>
              302-292-8982
            </div>
            <div className ={styles.text}>
              Order by phone or online!
            </div>
           </div>
        </div>
        <div className ={styles.item}>
            <Image src ={logo} alt ="" />
        </div>
        <div className ={styles.item}>
            <div className ={styles.menu}>Menu</div>
            <div className ={styles.menu}>About</div>
            <div className = {styles.cart}>
              <Image src ="/img/cart.png" alt= "" width = "60" height = "60"/>
              <div className ={styles.counter}>2</div>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar