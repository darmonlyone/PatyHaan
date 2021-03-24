import { renderHook, act } from "@testing-library/react-hooks";
import useRegisterHandle from ".";

describe("test useRegisterHandle", () => {
	it("should handle eamil correctly", () => {
		const { result } = renderHook(() => useRegisterHandle());

		expect(result.current.email).toEqual("");

		act(() => result.current.onEmailChange({ target: { value: "test@test.com" } }));

		expect(result.current.email).toEqual("test@test.com");
	});

	it("should handle password correctly", () => {
		const { result } = renderHook(() => useRegisterHandle());

		expect(result.current.password).toEqual("");

		act(() => result.current.onPasswordChange({ target: { value: "123456" } }));

		expect(result.current.password).toEqual("123456");
	});

	it("should handle repeat password correctly", () => {
		const { result } = renderHook(() => useRegisterHandle());

		expect(result.current.repeatPassword).toEqual("");

		act(() =>
			result.current.onRepeatPasswordChange({ target: { value: "123456" } })
		);

		expect(result.current.repeatPassword).toEqual("123456");
	});

	it("should handle requiredChecked correctly", () => {
		const { result } = renderHook(() => useRegisterHandle());

		expect(result.current.requiredChecked).toEqual(false);

		act(() =>
			result.current.onRequiedCheck({ target: { checked: true } })
		);

		expect(result.current.requiredChecked).toEqual(true);

		act(() =>
			result.current.onRequiedCheck({ target: { checked: false } })
		);

		expect(result.current.requiredChecked).toEqual(false);
	});
});
