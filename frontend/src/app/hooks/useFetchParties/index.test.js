import { renderHook, act } from "@testing-library/react-hooks";
import useFetchParties from ".";
import axios from "axios";
import { cleanup } from "@testing-library/react";

jest.mock("axios");
afterEach(cleanup);

describe("test useFetchParties", () => {
	it("should useFetchParties handle fetch data correctly", async () => {
		await axios.get.mockResolvedValue({
			status: 200,
			data: [{ name: "test" , createAt: new Date("1970-01-01")},{ name: "test2" , createAt: new Date("1970-01-02")}],
		});

		const { result } = renderHook(() => useFetchParties());

		expect(result.current.parties).toEqual([]);
 
        await act(() => Promise.resolve())

        expect(result.current.parties).toEqual([{ name: "test2" , createAt: new Date("1970-01-02")},{ name: "test" , createAt: new Date("1970-01-01")}]);
	});
});
