import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SummaryForm = () => {
    const [check, setCheck] = useState(false);
    return (
        <Form>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    id="disable-button-checked"
                    checked={check}
                    onChange={(e) => setCheck(e.target.checked)}
                />
            </Form.Group>
            <label htmlFor="disable-button-checked">Disable Button</label>
            <Button disabled={!check}>버튼</Button>
        </Form>
    );
};

export default SummaryForm;
