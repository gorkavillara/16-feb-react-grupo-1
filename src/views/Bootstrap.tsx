import Modal from "components/Modal"
import React from "react"
import { Button } from "reactstrap"

const Bootstrap = () => {
    return (
        <div>
            <Button color="primary">Texto</Button>
            <Modal
                btnText="Haz clic"
                ctaPositive={<Button color="primary">Ok</Button>}
                ctaNegative={<Button color="danger">Cancel</Button>}
                title="Título del modal"
            >
                <p>Buenos días desde ReactStrap</p>
            </Modal>
        </div>
    )
}

export default Bootstrap
