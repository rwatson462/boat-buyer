import Catalog from "./Components/Catalog/Catalog";
import Basket from "./Components/Basket/Basket";
import PageTitle from "./Components/PageTitle";
import MultiColumnLayout from "./Components/MultiColumnLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BasketProvider from "./Basket/Provider/BasketProvider";

const queryClient = new QueryClient()

function App() {
  return (
    <BasketProvider>
      <QueryClientProvider client={queryClient}>
        <PageTitle title='Boat-buyer' />
        <MultiColumnLayout
          columns={[
            <Catalog />,
            <Basket />,
          ]}
        />
      </QueryClientProvider>
    </BasketProvider>
  );
}

export default App;
