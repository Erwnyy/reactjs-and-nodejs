import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './product.css'

// React icons
import { FaArrowRight } from 'react-icons/fa'
import Navbar from '../../components/navbar/Navbar';

// React booststrap
// import { Modal, Button } from 'react-bootstrap';

function ItemsProduct() {
      const [show, setShow ] = useState(false)

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <div>
         <Navbar/> 
            <section className='products section' id='women'>
                    <h2 className='product_title'>PHOTO ESTETIC</h2>
                    <div className='product_container bd-grid'>
                        {/* PRODUCTS CARD 1 */}
                          <article className='sneaker'>      
                                <img src='/images/img-1.jpg' className='product_img'/>
                                <span className='product_name'>Gunung Rinjani</span>
                                <span className='product_dessc'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                                <Link to="/productdetail" className='button-light' onClick={handleShow}>Show <FaArrowRight /></Link>
                          </article>

                          {/* PRODUCTS CARD 2 */}
                          <article className='sneaker'>      
                                <img src='/images/img-2.jpg' className='product_img'/>
                                <span className='product_name'>Gunung Rinjani</span>
                                <span className='product_dessc'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                                <Link to="#" className='button-light' onClick={handleShow}>Show <FaArrowRight /></Link>
                          </article>

                          {/* PRODUCTS CARD 2 */}
                          <article className='sneaker'>      
                                <img src='/images/img-2.jpg' className='product_img'/>
                                <span className='product_name'>Gunung Rinjani</span>
                                <span className='product_dessc'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                                <Link to="#" className='button-light' onClick={handleShow}>Show <FaArrowRight /></Link>
                          </article>

                          {/* PRODUCTS CARD 2 */}
                          <article className='sneaker'>      
                                <img src='/images/img-2.jpg' className='product_img'/>
                                <span className='product_name'>Gunung Rinjani</span>
                                <span className='product_dessc'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                                <Link to="#" className='button-light' onClick={handleShow}>Show <FaArrowRight /></Link>
                          </article>
                          
                    </div>

                  {/* MODAL FUNCTION COMPONENT */}

                    {/* <div>
                        <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                              Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                              Save Changes
                        </Button>
                        </Modal.Footer>
                        </Modal>
                    </div> */}

                        {/* <div className='sneaker_pages bd-grid'>
                            <div>
                                <div className='sneaker_png'>1</div>
                                <div className='sneaker_png'>2</div>
                                <div className='sneaker_png'>3</div>
                                <div className='sneaker_png'>4</div>
                                <div className='sneaker_png'>&#8594;</div>
                            </div>
                        </div> */}
              </section>
    </div>
  )
}

export default ItemsProduct