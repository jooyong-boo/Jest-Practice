import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("체크박스 체크 여부에따라 버튼 활성/비활성", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: "버튼" });

    expect(checkbox).not.toBeChecked(); // 체크박스 비활성화 여부 체크

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
});

test("체크박스 라벨 위에 마우스를 올리면 팝오버", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // 팝오버 안보임
    const nullPopover = screen.queryByText(
        /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();
    // 체크박스 라벨 위에 마우스 올리면 팝오버 보임
    const termsAndContidions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndContidions);
    const popover = screen.getByText(
        /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();
    // 라벨 위를 벗어나면 팝오버 사라짐
    await user.unhover(termsAndContidions);
    expect(popover).not.toBeInTheDocument();
});
