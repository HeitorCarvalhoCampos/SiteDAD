import styles from "./Product.module.css"

export default function Product({img, description, price, descont, quant_coment, estrela}){
    return(
        <div className={styles.container}>
            <img src={img} alt="imagem produto" />
            <p>{description}</p>
            <div className={styles.prices}>
                <p className={styles.new_price}>${price}</p>
                <p className={styles.old_price}><del>${descont}</del></p>
            </div>
            <div className={styles.comments}>
                <img src={estrela} alt="estrelinhas" />
                <p>({quant_coment})</p>
            </div>
        </div>
    )
}