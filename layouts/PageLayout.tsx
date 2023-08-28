import Head from 'next/head'
import React from 'react'
import { Navbar } from '@/components'

interface IProps {
  children: React.ReactNode
  title?: string
}

export const PageLayout = ({ children, title = 'NewsApp' }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}
