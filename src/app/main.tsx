import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import AuthProvider from "./providers/AuthProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }

  const { worker } = await import("../mocks/browser");
  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Provider>
    </StrictMode>,
  );
});
