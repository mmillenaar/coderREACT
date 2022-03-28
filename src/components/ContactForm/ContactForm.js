import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comments, setComments] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            email,
            phone,
            address,
            comments
        }
        setContact(objContact)
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setComments('')
    }

    return (
        <Form onSubmit={handleContactForm}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre y apellido"
                    value={name} onChange={({ target }) => setName(target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo electrónico"
                    value={email} onChange={({ target }) => setEmail(target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Ingrese su número de teléfono" 
                    value={phone} onChange={({ target }) => setPhone(target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ingrese la dirección a donde se hará el envío"
                    value={address} onChange={({ target }) => setAddress(target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 lg" controlId="formBasicComments">
                <Form.Label>Comentarios</Form.Label>
                <Form.Control type="text" placeholder="Ingrese cualquier comentario que crea necesario"
                    value={comments} onChange={({ target }) => setComments(target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Confirmar
            </Button>
        </Form>
    )
}

export default ContactForm