import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import banner from './assets/banner.png'
import styles from './index.module.css'
import Section from './components/Section/Section'
import Products from "./components/Products/Products"
import Button from "./components/Button/Button"


const subtitle = "Today's"
const title = "Flash Sales"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <img className={styles.banner} src={banner} alt="" />
    <Section subtitle={subtitle} title={title}/>
    <Products />
    <div className={styles.buttons}>
      <Button />
    </div>
  </StrictMode>,
)
