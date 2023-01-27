import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("updates scoop subtotal when scoops change", async () => {
    const user = userEvent.setup();
    render(<Options optionType="scoops" />);

    // 기본 요금을 0 으로 설정
    const scoopsSubtotal = screen.getByText("Scoops total: $", {
        exact: false,
    });
    expect(scoopsSubtotal).toHaveTextContent("0.00");

    // 바닐라 스쿱을 1로 업데이트하고 소계를 확인
    const vanillaInput = await screen.findByRole("spinbutton", {
        name: "Vanilla",
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, "1");
    expect(scoopsSubtotal).toHaveTextContent("2.00");

    // 초콜릿 스쿱을 2로 업데이트하고 소계를 확인
    const chocolateInput = await screen.findByRole("spinbutton", {
        name: "Chocolate",
    });
    await user.clear(chocolateInput);
    await user.type(chocolateInput, "2");
    expect(scoopsSubtotal).toHaveTextContent("6.00");
});
