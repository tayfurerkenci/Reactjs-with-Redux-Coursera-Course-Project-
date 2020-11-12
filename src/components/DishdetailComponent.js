import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({dish},{comments}){
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };{/*weekday: 'long', */}
        if (dish != null){
            const com = dish.comments.map((comment) =>
            {
                
                return (
                    <div>
                        <ul className="list-unstyled">
                            <li>
                                <p>
                                    {comment.comment}
                                </p>
                                <p>
                                    
                                    -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", options)}
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                );
            })
            return(
                <div>
                    <h4>Comments</h4>
                    {com}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }
  

    const DishDetail = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            </div>
        );
    }
        

export default DishDetail;