import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'

import styles from './BookCard.module.css'
function BookCard({data  , handleLikedList}) {
  
    const  {title , auther , image , language , pages} = data;
  const[like , setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data , like)
    setLike((like) => !like )
};


    return (
    <div className={styles.card}>
        <img src={image} alt={title} /> 
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{auther}</p>
            <div>
                <span>{language}</span>
                <span>{pages} pages</span> 
            </div>
            <button onClick={likeHandler}>
                <AiFillHeart color={like ? "red" : "#e0e0e0"} font-size='1.8rem' />
            </button>
        </div>
    </div>
  )
}

export default BookCard;