import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    renderDish() {
        if (this.props.dish != null)
            return(
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(){
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };{/*weekday: 'long', */}
        if (this.props.dish != null){
            const com = this.props.dish.comments.map((comment) =>
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
  

    render(){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish()}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments()}
                </div>
            </div>
        );
    }
}

export default DishDetail;