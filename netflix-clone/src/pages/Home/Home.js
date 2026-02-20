import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowsList from '../../components/Rows/RowsList/RowsList'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowsList />
      <Footer />
    </>
  )
}

export default Home
