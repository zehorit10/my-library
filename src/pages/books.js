import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '../app/layout';
import SearchBook from '../components/SearchBook';
import BookItem from '../components/BookItem';

function BooksPage({ books }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filterAuthor, setFilterAuthor] = useState('');
  const [filterYear, setFilterYear] = useState('');

  const handleSearchResults = results => {
    setSearchResults(results);
  };

  const handleFilter = () => {
    const results = books.filter(book =>
      book.author.toLowerCase().includes(filterAuthor.toLowerCase()) &&
      book.year.includes(filterYear)
    );
    setSearchResults(results);
  };

  return (
    <Layout>
      <h1>רשימת ספרים</h1>
      <div>
        <input
          type="text"
          value={filterAuthor}
          onChange={e => setFilterAuthor(e.target.value)}
          placeholder="חפש לפי מחבר..."
        />
        <input
          type="text"
          value={filterYear}
          onChange={e => setFilterYear(e.target.value)}
          placeholder="חפש לפי שנה..."
        />
        <button onClick={handleFilter}>סנן</button>
      </div>
      <SearchBook books={books} onSearchResults={handleSearchResults} />
      <ul>
        {searchResults.length > 0
          ? searchResults.map(book => <li key={book.id}><BookItem book={book} /></li>)
          : books.map(book => <li key={book.id}><BookItem book={book} /></li>)}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'books.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      books: data
    }
  };
}

export default BooksPage;

/*import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '../app/layout';
import SearchBook from '../components/SearchBook';
import BookItem from '../components/BookItem';

function BooksPage({ books }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = results => {
    setSearchResults(results);
  };

  return (
    <Layout>
      <h1>רשימת ספרים</h1>
      <SearchBook books={books} onSearchResults={handleSearchResults} />
      <ul>
        {searchResults.length > 0
          ? searchResults.map(book => <li key={book.id}><BookItem book={book} /></li>)
          : books.map(book => <li key={book.id}><BookItem book={book} /></li>)}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'books.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      books: data
    }
  };
}

export default BooksPage;*/
