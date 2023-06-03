import React from 'react'
import {  Row ,Col  } from 'react-bootstrap'
import Storeitems from '../../data/storeItems.json'
import styles from './Category.module.css'

export default function Category() {
  return (
    <>
 <div className="text-center mt-5 mb-4">
 <h2 >Choose your <span className='pinkText'>Box</span> </h2>
  <p className='muted '>Send the perfect gift to show your love
</p>
 </div>
     <Row md={2} xs={1}  lg={4} className='gy-2'>
      
    
       {Storeitems.map((item)=>(
        <Col key={item.id}>

            
           <div className="position-relative">
           <img className='w-100' src={item.imgUrl} alt="" />
           <div className={styles.imgLayer}>
           <p className={styles.lyerText}>{item.name}</p>
           </div>
        
           </div>
        
        </Col >
       ))}
     
    </Row>
    </>
  )
}
