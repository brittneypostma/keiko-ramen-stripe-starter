import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/sections/carousel'
import MenuCard from '../components/pieces/menu-card'

const MenuPage = () => {
  return (
    <Layout>
      <SEO title="Menu" />
      <div className="mb-64">
        <div className="relative bg-clear-top">
          <h1 className="text-center">Menu</h1>
          <Carousel />
          <div className="grid gap-10 gtc justify-center xl:mx-48">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MenuPage
