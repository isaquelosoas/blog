import styles from '../../../styles/Post.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function Post(props){
    const [contentSize,setContentSize] = useState(0)
    const {title,content,img,readmore=true,id} = props
    useEffect(()=>{
        setContentSize(window.innerWidth-100)        
    },[])
    return(
        <article className={styles.post}>
            <h2>{title}</h2>
            <img src={img}/>
            <div className={styles.paragraph}>
                <p>
                {readmore?`${content.substring(0,contentSize)}...`:content}
                </p>
                {/* <div></div> */}

            </div>
            {readmore
            &&
            <Link href={`/posts/${id}`}><a>Leia Mais</a></Link>}
            <div className={styles.separator}></div>
        </article>
    )
}