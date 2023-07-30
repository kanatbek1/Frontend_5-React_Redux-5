import React, { useState } from 'react'
import { Row, Col, Form, Button, Container, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../../redux/actions'

function UserRegister() {
    const { preloader } = useSelector(state => state.preloaderReducer)
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })
    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const addUser = (event) => {
        event.preventDefault()
        dispatch(addUserAction(user))
    }
  return (
    <Container>
        <h1> Регистрация пользователей </h1>
        {
        preloader 
        ?
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        :
        <Form onSubmit={addUser}>
            <Row>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control
                            type="text"
                            placeholder="Имя"
                            name="name"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="username">

                        <Form.Control
                            type="text"
                            placeholder="Имя пользователя"
                            name="username"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Button type="submit" variant="success" className="w-100">
                        зарегистрировать пользователя
                    </Button>
                </Col>
            </Row>
        </Form>
    }
    </Container>
  )
}
export default UserRegister