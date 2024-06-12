import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Landing_49 from './pages/open/pages/Landing_49';
import LandingStatic_49 from './pages/open/pages/LandingStatic_49';
import AppLayout from './ui/AppLayout';
import ProtetctedRoute from './ui/ProtetctedRoute';
import GlobalStyles from './styles/GlobalStyles';

import {
  Account_49,
  Bookings_49,
  Cabins_49,
  Dashboard_49,
  Login_49,
  PageNotFound_49,
  Settings_49,
  NewUsers_49,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element:<Landing_49 />,
  },
  {
    path: '/landing',
    element:<Landing_49 />,
  },
  {
    path: '/login',
    element:<Login_49 />,
  },
  {
    path: '/',
    element: <ProtetctedRoute><AppLayout /></ProtetctedRoute> ,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard_49 />,
      },
      {
        path: 'bookings',
        element: <Bookings_49 />,
      },
      {
        path: 'bookings/:bookingId',
        element: <Bookings_49 />,
      },
      {
        path: 'cabins',
        element: <Cabins_49 />,
      },
      {
        path: 'users',
        element: <NewUsers_49 />,
      },
      {
        path: 'settings',
        element: <Settings_49 />,
      },
      {
        path: 'account',
        element: <Account_49 />,
      },
    ],
  },
]);

const App_49 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_49;
