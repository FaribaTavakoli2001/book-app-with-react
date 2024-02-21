import React, { useState } from 'react'
import { books as bookData} from '../constants/mockData'
import BookCard from './BookCard'
import SideCard from './sideCard'

import styles from './Books.module.css'
import SearchBox from './SearchBox'

function Books() {
    const [liked , setLiked]= useState([])
    const [ search , setSearch] = useState([])
    const [ books , setBooks] = useState(bookData)

    const searchHandler = () => {
        if(search){
            const newBooks = bookData.filter((book) =>
            book.title.toLowerCase().includes(search)
       );
    setBooks(newBooks)
    }else{
        setBooks(bookData)
    }
    }

    const handleLikedList = (book , status) => {
        if (status){
            const newLikeList = liked.filter((item) => item.id !== book.id);
            setLiked(newLikeList)
        }else{
            setLiked(liked => [...liked , book])
        }
    }
    
  return (
    <>
    <SearchBox search={search} 
    setSearch={setSearch}
    searchHandler={searchHandler}
    />
    <div className={styles.container}>  
    <div className={styles.cards}>
        {books.map(book => (
    <BookCard key={book.id} 
    data={book} 
    handleLikedList={handleLikedList}/>))}
    </div>
    {
        !!liked.length && <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map(book =>
            <SideCard key={book.id} data={book}/>)}
            </div>  
    }
    </div>
    </>
  )
}

export default Books