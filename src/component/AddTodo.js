import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'
import { v4 } from 'uuid';

const AddTodo = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        id: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        addTodo({ ...todo, id: v4() })
        console.log(todo);

        setTodo({
            title: '',
            description: ''
        })
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Body className='shadow-sm'>
                            <DisplayCount />

                            <Form onSubmit={handleSubmit}>

                                <Form.Group>
                                    <Form.Label>Todo Title</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter here'
                                        value={todo.title}
                                        onChange={event => setTodo({ ...todo, title: event.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className='mt-4'>
                                    <Form.Label>Todo Description</Form.Label>
                                    <Form.Control
                                        as={'textarea'}
                                        type='text'
                                        placeholder='Enter here'
                                        value={todo.description}
                                        onChange={event => setTodo({ ...todo, description: event.target.value })}

                                    />
                                </Form.Group>

                                <Container className='mt-3'>
                                    <Button type='submit' variant='primary'>
                                        Add Todo
                                    </Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps = (state) => ({})
const mapDispatcToProps = (dispatch) => ({
    addTodo: (todo) => (dispatch(addTodo(todo)))
})

export default connect(mapStateToProps, mapDispatcToProps)(AddTodo);