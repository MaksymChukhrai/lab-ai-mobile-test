import "@testing-library/jest-dom";

Object.defineProperty(window, "URL", {
  value: {
    createObjectURL: jest.fn(),
  },
  writable: true,
});
