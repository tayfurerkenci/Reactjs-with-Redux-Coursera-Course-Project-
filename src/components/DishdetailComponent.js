import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component{
        constructor(props){
            super(props);
        
            this.state = {
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
          }
          handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            // event.preventDefault();
        }
        render()
        {
            return (
                <div>
                    <Button outline type="submit" className="grey" onClick={this.toggleModal}>
                        <i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                               </Row>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={12}>First Name</Label>
                                    <Col md={12}>
                                        <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="message" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="6"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Button type="submit" color="primary">
                                        Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
            </div>
            );
        }
    }

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

    function RenderComments({comments, addComment, dishId}) {
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };{/*weekday: 'long', */}
        if (comments != null){
            return (
                    <div>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {comments.map((c) => {
                                return (
                                    <li key={c.id}>
                                        <p>{c.comment}</p>
                                        <p>-- {c.author}, {new Date(c.date).toLocaleDateString("en-US", options)}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <CommentForm dishId={dishId} addComment={addComment} />
                    </div>
                );
        }
        else
            return(
                <div></div>
            );
    }
  

    const DishDetail = (props) => {
        if(props.dish != null)
        { this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
            return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                    </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />
                    </div>
                </div>
                </div>
        );
            }
        else
                return(
                    <div></div>
                );
    }
        

export default DishDetail;