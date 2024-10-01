import styles from './Promotion.module.css'
// import styled from "styled-components"

// const HeaderPreco = styled.header`
//     background-color: white;
// `;

export default function Promotion(){
    return (
        <header>
            <div className={styles.promotion}>
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <a href="#" className={styles.shop}>
                        Shop Now
                    </a>
                </p>
                <select className={styles.dropdown} name="" id="">
                    <option className={styles.opcao} value="english">English</option>
                    <option className={styles.opcao} value="portuguese">Portuguese</option>
                </select>
            </div>
        </header>
    )

    // return <HeaderPreco>Exclusive <a href="#">Home</a></HeaderPreco>;
}