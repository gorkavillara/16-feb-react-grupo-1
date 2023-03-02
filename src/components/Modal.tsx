import React, { useState } from "react"
import {
    Button,
    Modal as RSModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap"

interface ModalProps {
    btnText: string
    title: string
    ctaPositive: JSX.Element
    ctaNegative: JSX.Element
    children: any
}

const Modal = ({ btnText, title, ctaPositive, ctaNegative, children }: ModalProps) => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <>
            <Button color="info" onClick={toggle}>
                {btnText}
            </Button>
            <RSModal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>
                    {ctaPositive} {ctaNegative}
                </ModalFooter>
            </RSModal>
        </>
    )
}

export default Modal
