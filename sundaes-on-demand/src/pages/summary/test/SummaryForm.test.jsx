import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("체크박스 체크 여부에따라 버튼 활성/비활성", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
    const button = screen.getByRole("button", { name: "버튼" });

    expect(checkbox).not.toBeChecked(); // 체크박스 비활성화 여부 체크

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
});
