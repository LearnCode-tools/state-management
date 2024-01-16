import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryExample } from "../components/pages/reactQuery";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const ReactQueryEX = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryExample />
    </QueryClientProvider>
  );
};
