import { sum } from "../sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 3)).not.toBeCloseTo(NaN);
  expect(sum(1, 3)).not.toBeCloseTo(3.9);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

test("Map", () => {
  const map = new Map();
  map.set("one", 1);
  map.set("two", 3);
  map.set("two", 2);

  expect(map.size).toBe(2);
  expect(map.get("two")).toBe(2);
  expect(map.has("two")).toBe(true);

  map.delete("two");
  expect(map.size).toBe(1);
});

test("Error", () => {
  function throwError() {
    throw new Error("404: Not found!");
  }
  expect(throwError).toThrow(/404/);
});

describe("Asynchronous", () => {
  const getUser = jest.fn(async () => "user");

  test("Promise", async () => {
    await getUser().then((data) => {
      expect(data).toBe("user");
    });
  });

  test("Async/await", async () => {
    const data = await getUser();
    expect(data).toBe("user");
  });
});

import axios from "axios";
jest.mock("axios");

describe("Mock", () => {
  const res = { message: "hi" };

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => res,
      });
  });

  test("mock axios", async () => {
    axios.get.mockResolvedValue(res);

    await axios.get("user").then((data) => {
      expect(data).toEqual({ message: "hi" });
    });
  });
  test("mock fetch", async () => {
    await fetch("user").then((d) => {
      expect(d.json()).toEqual({ message: "hi" });
    });
  });
});
