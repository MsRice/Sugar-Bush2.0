import React from 'react';

const OrderNow = () => {
    return (
        <section id='order-now'>
            <div className="container">
                <div className="row-sm">
                    <div className='order-online--wrapper'>
                        <div className="order__sect--wrapper order__header">
                            <h4>Order online</h4>
                            <h5>Sugar Bush Bar & Grill Sports Bar</h5>
                            <div>
                                <button>Pickup</button>
                                <button>Delivery</button>
                            </div>
                             <h4>Place order with:</h4>
                        </div>
                        <div className="order__sect--wrapper order__service">
                            <div>img_circle</div>
                            <div>
                                <h4>Seamless</h4>
                                <h5>Service fees up to 15% -  Delivery fees start at $1.50</h5>
                                <h5>Delivers in 40 min</h5>
                            </div>
                            <div>btn go</div>
                        </div>
                        <div className="order__sect--wrapper order__service"></div>
                        <div className="order__sect--wrapper order__service"></div>
                        <div className="order__sect--wrapper order__service"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OrderNow;
