import styles from './Products.module.css'
import Product from "../Product/Product"
import img_controle from '../../assets/img_controle.png'
import img_teclado from '../../assets/img_teclado.png'
import img_monitor from '../../assets/img_monitor.png'
import img_cadeira from '../../assets/img_cadeira.png'
import cinco_estrelas from '../../assets/cinco_estrelas.png'
import quatro_estrelas from '../../assets/quatro_estrelas.png'
import meia_estrela from '../../assets/meia_estrelas.png'


const imgs = [img_controle, img_teclado, img_monitor, img_cadeira]

const descriptions = ["HAVIT HV-G92 Gamepad", "AK-900 Wired Keyboard", "IPS LCD Gaming Monitor", "S-Series Comfort Chair"]

const estrelas =[cinco_estrelas, quatro_estrelas, meia_estrela]

export default function Products(){
    return(
        <div className={styles.container}>
            <Product img={imgs[0]} description={descriptions[0]} price={120} descont={160} quant_coment={88} estrela={estrelas[0]}/>
            <Product img={imgs[1]} description={descriptions[1]} price={960} descont={1160} quant_coment={75} estrela={estrelas[1]}/>
            <Product img={imgs[2]} description={descriptions[2]} price={370} descont={400} quant_coment={99} estrela={estrelas[0]}/>
            <Product img={imgs[3]} description={descriptions[3]} price={375} descont={400} quant_coment={99} estrela={estrelas[2]}/>
        </div>
    )
}