import AuthProvider from "./Auth/Provider/AuthProvider";
import BasketProvider from "./Basket/Provider/BasketProvider";
import QueryClientProvider from "./Providers/QueryClientProvider";
import RouterProvider from "./Providers/RouterProvider";

function App() {
  return (
    <AuthProvider>
      <BasketProvider>
        <QueryClientProvider>
          <RouterProvider />
        </QueryClientProvider>
      </BasketProvider>
    </AuthProvider>
  );
}

export default App;
