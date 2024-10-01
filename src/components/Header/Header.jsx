import styles from './Header.module.css'
import Promotion from '../Promotion/Promotion'
import lupa from '../../assets/lupa.png'
import wish from '../../assets/coracao.png'
import cart from '../../assets/carrinho.png'

// import styled from "styled-components"

// const HeaderPreco = styled.header`
//     background-color: white;
// `;

export default function Header(){
    return (
        <header>
            <Promotion />
            <div className={styles.cabecalho}>
                <h1>Exclusive</h1>
                <nav>
                    <ul className={styles.lista}>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign up</li>
                    </ul>
                </nav>
                <div className={styles.divona}>
                    <div className={styles.container}>
                        <input placeholder='What are you looking for?' type="text" name='' id='' className={styles.input}/>
                        <img src={lupa} alt="" />
                    </div>
                    <img src={wish} alt="" />
                    <img src={cart} alt="" />
                </div>
            </div>
        </header>
    )

    // return <HeaderPreco>Exclusive <a href="#">Home</a></HeaderPreco>;
}