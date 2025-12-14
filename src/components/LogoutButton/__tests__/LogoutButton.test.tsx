import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "@mui/material/styles";
import { LogoutButton } from "../index";
import { logout } from "../../../api/authService";
import theme from "../../../theme/theme";
import { apiSlice } from "../../../store/api/apiSlice";
import uploadFileReducer from "../../../store/slices/uploadFileSlice";
import analysisResultReducer from "../../../store/slices/analysisResultSlice";
import bloodMarkersReducer from "../../../store/slices/bloodMarkersSlice";
import optionReducer from "../../../store/slices/optionSlice";
import counterReducer from "../../../store/slices/counterSlice";

jest.mock("../../../api/authService", () => ({
  logout: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const createMockStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      option: optionReducer,
      bloodMarkers: bloodMarkersReducer,
      uploadFile: uploadFileReducer,
      analysisResult: analysisResultReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

const renderWithProviders = (component: React.ReactElement) => {
  const store = createMockStore();

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};

describe("LogoutButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders logout button", () => {
    renderWithProviders(<LogoutButton />);
    const button = screen.getByRole("button", { name: /logout.button/i });
    expect(button).toBeInTheDocument();
  });

  test("opens modal when button is clicked", () => {
    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    expect(screen.getByText("logout.modal.title")).toBeInTheDocument();
    expect(screen.getByText("logout.modal.yes")).toBeInTheDocument();
    expect(screen.getByText("logout.modal.no")).toBeInTheDocument();
  });

  test("closes modal when No is clicked", () => {
    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    const noButton = screen.getByText("logout.modal.no");
    fireEvent.click(noButton);

    expect(screen.queryByText("logout.modal.title")).not.toBeInTheDocument();
  });

  test("calls logout and navigates when Yes is clicked", async () => {
    (logout as jest.Mock).mockResolvedValue(undefined);

    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    const yesButton = screen.getByText("logout.modal.yes");
    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(logout).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });

  test("disables button when loading", async () => {
    (logout as jest.Mock).mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 100)),
    );

    renderWithProviders(<LogoutButton />);

    const button = screen.getByRole("button", { name: /logout.button/i });
    fireEvent.click(button);

    const yesButton = screen.getByText("logout.modal.yes");
    fireEvent.click(yesButton);

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });
});
