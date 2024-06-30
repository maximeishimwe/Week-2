import { renderHook, act } from "@testing-library/react-hooks";
import useLocalStorage from "../../hooks/useLocalStorage";

describe("useLocalStorage Hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return initial value", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "initialValue")
    );
    expect(result.current[0]).toBe("initialValue");
  });

  it("should update localStorage when state changes", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "initialValue")
    );

    act(() => {
      result.current[1]("newValue");
    });

    expect(localStorage.getItem("testKey")).toBe('"newValue"');
  });
});
