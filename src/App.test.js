import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";
import { replaceColorName } from "./App";

test("초기 버튼의 색상이 올바른지 확인하고 버튼을 클릭한다.", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    // 색이 올바른지
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // 버튼 클릭
    fireEvent.click(colorButton);

    // 버튼 색이 파란색으로 변해야한다
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    // 텍스트가 Change to Red로 변해야한다
    expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
    render(<App />);
    // check that the button starts out enabled
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();

    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("체크박스 체크시 버튼 비활성화", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    expect(colorButton).toBeEnabled();
    expect(checkbox).not.toBeChecked();

    // 체크박스 체크시 버튼 비활성화
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(colorButton).toBeDisabled();

    // 체크박스 체크해제시 버튼 활성화
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(colorButton).toBeEnabled();
});

test("버튼 비활성화시 버튼이 회색으로 변한다", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

describe("카멜케이스 대문자 앞에 공백을 넣는다", () => {
    test("Works for no inner capital letters", () => {
        expect(replaceColorName("Red")).toBe("Red");
    });
    test("Works for one inner capital letter", () => {
        expect(replaceColorName("MidnightBlue")).toBe("Midnight Blue");
    });
    test("Works for multiple inner capital letters", () => {
        expect(replaceColorName("MidnightVioletBlue")).toBe(
            "Midnight Violet Blue"
        );
    });
});
