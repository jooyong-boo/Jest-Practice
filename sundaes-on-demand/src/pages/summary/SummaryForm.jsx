import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const SummaryForm = () => {
    const [check, setCheck] = useState(false);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>No ice cream will actually be delivered</Popover.Body>
        </Popover>
    );

    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{ color: "red" }}> Terms and Conditions </span>
            </OverlayTrigger>
        </span>
    );
    return (
        <Form>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    id="disable-button-checked"
                    checked={check}
                    onChange={(e) => setCheck(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>

            <Button disabled={!check}>버튼</Button>
        </Form>
    );
};

export default SummaryForm;
