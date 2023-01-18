import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

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

// test("초기 텍스트가 올바르게 표시되야한다.", () => {
//     render(<App />);
//     const colorButton = screen.getByRole("button", { name: "Change to blue" });
//     expect(colorButton).to
// });

// test("버튼을 클릭하면 파란색으로 변해야한다.", () => {});
