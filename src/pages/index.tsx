// components
import { Banner } from '@/components/organisms/Banner';
import { Layout } from '@/components/molecules/Layout';
import { Menu } from '@/components/organisms/Menu';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Menu />
    </Layout>
  );
}
