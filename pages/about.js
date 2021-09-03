import styles from '../styles/About.module.css'
import {Header} from './components/header/header'
import Head from 'next/head'
export default function About(){
    return(
        <div className={styles.container}>
            <Head>
                <title>TripJournal - Sobre Nós</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.about}>
                <h2>Sobre nós</h2>
                <article>
                    <img src="https://placeimg.com/260/260/people"/>
                    <div>
                        <h3>Isaque Lopes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mi quis quam sollicitudin mattis at non nisl. Suspendisse aliquet vel risus vel rutrum. Curabitur interdum at enim in convallis. Curabitur iaculis, tellus sit amet facilisis bibendum, mi enim porta sapien, eget vulputate arcu quam sed dui. Etiam fringilla interdum odio id cursus. Nullam placerat lacus odio, id finibus nisi semper vel. Proin malesuada ex sit amet risus porta rutrum. Etiam varius bibendum sem, id varius metus ultricies eget. Sed augue mi, rutrum et est vel, volutpat rutrum quam.</p>
                    </div>
                </article>
                <article>
                    <img src="https://placeimg.com/270/270/people"/>
                    <div>
                        <h3>Marília Lopes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mi quis quam sollicitudin mattis at non nisl. Suspendisse aliquet vel risus vel rutrum. Curabitur interdum at enim in convallis. Curabitur iaculis, tellus sit amet facilisis bibendum, mi enim porta sapien, eget vulputate arcu quam sed dui. Etiam fringilla interdum odio id cursus. Nullam placerat lacus odio, id finibus nisi semper vel. Proin malesuada ex sit amet risus porta rutrum. Etiam varius bibendum sem, id varius metus ultricies eget. Sed augue mi, rutrum et est vel, volutpat rutrum quam.</p>
                    </div>
                    
                </article>
            </main>
        </div>
    )
}