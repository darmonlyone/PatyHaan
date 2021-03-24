import { renderHook, act } from "@testing-library/react-hooks";
import useCreatePartyHandle from ".";

describe("test useCreatePartyHandle", () => {
	it("should handle correctly", async () => {
		const { result } = renderHook(() => useCreatePartyHandle());

		expect(result.current.partyName).toEqual("");
		expect(result.current.amount).toEqual(1);
		expect(result.current.imageUrl).toEqual("");

		act(() => {
			result.current.onPartyNameChange({ target: { value: "test" } });
			result.current.onAmountChange({ target: { value: 2 } });
			result.current.onImageUrlChange({ target: { value: "image url" } });
		});

		expect(result.current.partyName).toEqual("test");
		expect(result.current.amount).toEqual(2);
		expect(result.current.imageUrl).toEqual("image url");
	});

	it("should handle partyname correctly", () => {
		const { result } = renderHook(() => useCreatePartyHandle());

		expect(result.current.partyName).toEqual("");

		act(() => result.current.onPartyNameChange({ target: { value: "test" } }));

		expect(result.current.partyName).toEqual("test");
	});

	it("should handle amount correctly", () => {
		const { result } = renderHook(() => useCreatePartyHandle());

		expect(result.current.amount).toEqual(1);

		act(() => result.current.onAmountChange({ target: { value: 2 } }));

		expect(result.current.amount).toEqual(2);
	});

	it("should handle imageurl correctly", () => {
		const { result } = renderHook(() => useCreatePartyHandle());

		expect(result.current.imageUrl).toEqual("");

		act(() =>
			result.current.onImageUrlChange({ target: { value: "image url" } })
		);

		expect(result.current.imageUrl).toEqual("image url");
	});
});
