import React from 'react'
import Category from '../Category/Category'
import { Container } from 'react-bootstrap'
import SliderProduct from '../SliderProduct/SliderProduct'
import Header from '../Header/Header'




export default function Home() {
  return (
    <>
    <Header/>
    <Container className='w-75'>
    <Category/>
 
    </Container>
    <SliderProduct />
 
    </>
  )
}
