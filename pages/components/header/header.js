import styles from '../../../styles/Header.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {navUpdate} from '../../actions/index'
export  function Header(props){
    const {value, navUpdate} = props
    console.log(props)
    const [scroll,setScroll] = useState(0)
    const [y,setY]= useState(0)      
    function changePosition(){
        const navElement = document.querySelector("header nav")
        navUpdate(navElement.getBoundingClientRect().y)
    }
    useEffect(()=>{
        window.addEventListener('scroll', (event) => {
            setScroll(window.scrollY)
        });

       
        if(!value){
           changePosition()
        }
        setY(value)

    },[])
    return(
        <header className={styles.header}> 
            <Link href="/">            
                <h1 className={styles.bigLogo}>Trip<strong>Journal</strong></h1>
            </Link>           
            <nav className={scroll>y?styles.fixed:styles.standard}>
                <ul>
                    {scroll>y&&window.innerWidth>700&&
                    <Link href="/" style={{width:"100%"}}>
                        <li>
                                <h1 className={styles.logo}>Trip<strong>Journal</strong></h1>
                        </li>
                    </Link>}
                    <Link href="/" style={{width:"100%"}}>
                        <li>
                                <a>Home</a>
                        </li>
                    </Link>
                    <Link href="/about">
                        <li>
                                <a>Sobre Nós</a>
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li>
                                <a>Contato</a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
const mapStateToProps = store => ({
    value: store.navPosition.value
  });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ navUpdate }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Header);