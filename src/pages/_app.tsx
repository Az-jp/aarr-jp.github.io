import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import { type FC } from 'react';
import CommonProvider from '~/components/CommonProvider';
import SpacingLayout from '~/layouts/spacing';
import defaultSeoProps from '~next-seo.config';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...defaultSeoProps} />
    <CommonProvider>
      <SpacingLayout>
        <Component {...pageProps} />
      </SpacingLayout>
    </CommonProvider>
  </>
);

export default App;
