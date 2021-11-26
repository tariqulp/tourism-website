import React from 'react';
import { Button } from 'react-bootstrap';

const ShowOrders = (props) => {
    const { name, img, description } = props.order.cart[0];
    const { _id, status } = props.order;



    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." style={{ height: "280px", borderRadius: "5px" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        {
                            status == true ? <p className="card-text"><small className="text-muted">Status:Approved</small></p> :
                                <p className="card-text"><small className="text-muted">Status:Pending</small></p>

                        }
                    </div>
                    <div>
                        <Button variant="danger" className='mx-3 my-3' onClick={() => props.handleDelete(_id)} ><i class="far fa-window-close"></i> Delete</Button>

                        {
                            props.showBtn == true ? <Button variant="success" className="my-3" onClick={() => props.handleStatus(_id)}><i class="far fa-check-square"></i> Approve</Button> :
                                ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowOrders;