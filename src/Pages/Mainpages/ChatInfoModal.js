import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import ChatSignupModal from './ChatSignupModal.js';


export class ChatInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setSignupIsOpen: false
        };
    }

    render() {
        let setSignupClose = () => this.setState({ setSignupIsOpen: false });
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        customer.map(
                            id)
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is first modal: room information modal
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({ setSignupIsOpen: true })}>Sign up</Button>
                    <ChatSignupModal show={this.state.setSignupIsOpen} onSubmit={setSignupClose} />
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatInfoModal;
