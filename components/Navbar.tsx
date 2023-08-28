import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className="flex justify-between gap-3 p-5">
      <div>
        <Link href="/">News App 🗞️</Link>
      </div>
      <div className="flex gap-3">
        <Link href="/about">About</Link>
      </div>
    </nav>
  )
}
