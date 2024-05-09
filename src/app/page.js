import Layout from '@/app/layout';
import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
    <div>
      <Navbar />
      <h1>ברוכים הבאים לספריית סמיילי</h1>
    </div>
    /*<html>
      <body>
        <Navbar />
        <h1>ברוכים הבאים לספריית סמיילי</h1>
      </body>
    </html>*/
  );  
}

/*function Home({ books }) {
  return (
    <Layout>
    <div>
      <h1>רשימת הספרים</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.price} ש"ח</p>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
}*/

/*export async function getStaticProps() {
  const res = await fetch('public/books.json');
  const books = await res.json();

  return {
    props: {
      books,
    },
  };
}

export default Home;*/

