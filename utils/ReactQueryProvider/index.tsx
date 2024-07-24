"use client";
// ------------- import external dependencies ---------------
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

/**
 * Configure react-query query client
 */
const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (count: number) => {
        if (count >= 3) {
          return false;
        }
        return true;
      },
      refetchOnWindowFocus: false,
    },
  },
});

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ReactQueryProvider;
