import Catalog from "./Components/Catalog/Catalog";
import Basket from "./Components/Basket/Basket";
import PageTitle from "./Components/PageTitle";
import MultiColumnLayout from "./Components/MultiColumnLayout";
import BasketProvider from "./Basket/Provider/BasketProvider";
import QueryClientProvider from "./Providers/QueryClientProvider";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BasketProvider>
        <QueryClientProvider>
          <PageTitle title='Boat-buyer' />
          <MultiColumnLayout
            columns={[
              <Catalog />,
              <Basket />,
            ]}
          />
        </QueryClientProvider>
      </BasketProvider>
    </ErrorBoundary>
  );
}

export default App;
