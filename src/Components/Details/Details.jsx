import React, { useEffect, useState } from 'react'
import { CartState } from '../../Context/cartContext'
import { Container, Row , Col} from 'react-bootstrap';
import styles from "./Details.module.css"

export default function Details() {
    const {state : {cartItems}
    ,
    dispatch} =CartState();
    const [total, setTotal] = useState();
    useEffect(() => {
     
        setTotal(cartItems.reduce((acc,current)=> acc+Number(current.price)*current.quantity , 0));
  
    }, [cartItems])
    
  return (
    <>
  <div>
  <Container className='w-75 mt-5 m-auto'>
<Row md={2} xs={1}  lg={2}>
{cartItems.map((slide)=>(
    <Col key={slide.id}> 
    <img className={styles.ImgStyle} src={slide.imgPro} alt="" />
    <parent>{slide.name}</parent>
    </Col>
))}
</Row>
<div>
    <h5>Summery</h5>
    <p>Items : {cartItems.length}</p>
    <p>Total : {total}</p>

</div>
</Container>
  </div>
    </>
  )
}
