import BasketProvider from "./Basket/Provider/BasketProvider";
import QueryClientProvider from "./Providers/QueryClientProvider";
import RouterProvider from "./Providers/RouterProvider";

function App() {
  return (
    <BasketProvider>
      <QueryClientProvider>
        <RouterProvider />
      </QueryClientProvider>
    </BasketProvider>
  );
}

export default App;
