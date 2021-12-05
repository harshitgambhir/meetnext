import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      refetchOnMount: false,
    },
    mutations: {
      retry: false,
    }
  }
});

function MyApp({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}><Toaster /><Component {...pageProps} /></QueryClientProvider>;
}

export default MyApp
