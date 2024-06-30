import fetchWordData from "../../utils/fetchWordData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ word: "hello", meaning: "greeting" }),
  })
) as jest.Mock;

describe("fetchWordData Utility", () => {
  it("fetches word data successfully", async () => {
    const data = await fetchWordData("hello");
    console.log("###### received data", data);
    expect(data).toEqual({ word: "hello", meaning: "greeting" });
  });

  //   it("handles fetch error", async () => {
  //     (fetch as jest.Mock).mockImplementationOnce(() =>
  //       Promise.reject("API is down")
  //     );
  //     await expect(fetchWordData("hello")).rejects.toThrow("API is down");
  //   });
});
