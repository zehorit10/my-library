import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <h>דף הבית</h>
          </Link>
        </li>
        <li>
          <Link href="/books">
            <h>רשימת ספרים</h>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <h>אודות</h>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <h>צור קשר</h>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
/*export default function Navbar() {
  return (
    <div>
      <nav>
      <div>
        <Link href='/' passHref>
          <>Home</>
        </Link>
        <Link href={"https://mail.google.com"} className='hover:underline'>
                Gmail
            </Link>
        <Link href='/about' className='hover:underline' passHref>
          About
        </Link>
      </div>
    </nav>
    </div>
  )
}*/
