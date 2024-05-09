// components/BookItem.js

import React, { useState } from 'react';

function BookItem({ book, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(book.title);
  const [editedAuthor, setEditedAuthor] = useState(book.author);
  const [editedYear, setEditedYear] = useState(book.year);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log("השינויים נשמרו:", { title: editedTitle, author: editedAuthor, year: editedYear });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(book.title);
    setEditedAuthor(book.author);
    setEditedYear(book.year);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
          <input type="text" value={editedAuthor} onChange={e => setEditedAuthor(e.target.value)} />
          <input type="number" value={editedYear} onChange={e => setEditedYear(e.target.value)} />
          <button onClick={handleSave}>שמירה</button>
          <button onClick={handleCancel}>ביטול</button>
        </div>
      ) : (
        <div>
          <h2>{book.title}</h2>
          <p>מחבר: {book.author}</p>
          <p>שנת הוצאה: {book.year}</p>
          <button disabled={!book.available}>CHECKPOINT</button>
          <button onClick={handleEdit}>עריכה</button>
          <button onClick={handleDelete}>מחיקה</button>
        </div>
      )}
    </div>
  );
}

export default BookItem;


/*import React from 'react';

function BookItem({ book }) {
  const handleEdit = () => {
    console.log(`עריכת ספר: ${book.title}`);
  };

  const handleDelete = () => {
    console.log(`מחיקת ספר: ${book.title}`);
  };
  return (
    <div>
      <h2>{book.title}</h2>
      <p>מחבר: {book.author}</p>
      <p>שנת הוצאה: {book.year}</p>
      <button onClick={handleEdit}>עריכה</button>
      <button onClick={handleDelete}>מחיקה</button>
    </div>
  );
}

export default BookItem;*/

/*import React from 'react';

function BookItem({ book, onEdit, onDelete }) {
  const handleEdit = () => {
    onEdit(book.id);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-item">
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Published: {book.published}</p>
      <button onClick={handleEdit}>עריכה</button>
      <button onClick={handleDelete}>מחיקה</button>
    </div>
  );
}

export default BookItem;*/
