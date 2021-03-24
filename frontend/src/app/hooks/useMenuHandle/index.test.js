import { renderHook, act } from "@testing-library/react-hooks";
import useMenuHandle from ".";

describe("test useMenuHandle", () => {
	it("should useMenuHandle togle showMenu correctly", async () => {
		const { result } = renderHook(() => useMenuHandle());

		expect(result.current.showMenu).toEqual(false);

		act(() => result.current.onMenuClick());

		expect(result.current.showMenu).toEqual(true);

		act(() => result.current.onMenuClick());

		expect(result.current.showMenu).toEqual(false);
	});
});
