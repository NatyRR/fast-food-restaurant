// components
import { Banner } from '@/components/organisms/Banner';
import { Layout } from '@/components/molecules/Layout';
import { Menu } from '@/components/organisms/Menu';
import { ShoppingCartContextProvider } from '@/context/shopping/provider';

export default function Home() {
  return (
    <ShoppingCartContextProvider>
      <Layout>
        <Banner />
        <Menu />
      </Layout>
    </ShoppingCartContextProvider>
  );
}
