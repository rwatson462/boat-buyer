import Catalog from "./Components/Catalog/Catalog";
import Basket from "./Components/Basket/Basket";
import PageTitle from "./Components/PageTitle";
import MultiColumnLayout from "./Components/MultiColumnLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageTitle title='Boat-buyer' />
      <MultiColumnLayout
        columns={[
          <Catalog />,
          <Basket />,
        ]}
      />
    </QueryClientProvider>
  );
}

export default App;
