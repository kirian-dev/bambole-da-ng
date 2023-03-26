import { FC, ReactNode } from 'react';

import { HeadProvider } from './HeadProvider';
import { Layout } from '@/components/layout';

/**
The MainProvider component is a wrapper-width component that provides several functionalities for the children components that are passed to it.
The component wraps the HeadProvider component, which sets the metadata for the web page and provides a loading progress indicator.
 */

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
  return (
    <HeadProvider>
      <Layout>{children}</Layout>
    </HeadProvider>
  );
};

export default MainProvider;
