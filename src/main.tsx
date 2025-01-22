import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
import { BrowserRouter } from "react-router-dom";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:"
});

createRoot(
  document.getElementById("root") ?? document.createElement("div")
).render(
  <AuthProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </AuthProvider>
);
