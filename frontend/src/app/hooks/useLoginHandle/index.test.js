import { renderHook, act } from "@testing-library/react-hooks";
import useLoginHandle from ".";

describe("test useLoginHandle", () => {
	it("should useLoginHandle handle onchange email and password correctly", async () => {
		const { result } = renderHook(() => useLoginHandle());

		expect(result.current.email).toEqual("");
		expect(result.current.password).toEqual("");

		act(() => {
			result.current.onEmailChange({ target: { value: "test@test.com" } });
			result.current.onPasswordChange({ target: { value: "123456" } });
		});

		expect(result.current.email).toEqual("test@test.com");
		expect(result.current.password).toEqual("123456");
	});
});
