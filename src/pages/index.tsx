import styles from "@/styles/Home.module.scss";
import { Layout } from "@/molecules/Layout/Layout";
import { Banner } from "@/components/Banner/Banner";
import { Container } from "react-bootstrap";
import { Card } from "@/components/Menu/Card";
import { Menu } from "@/components/Menu/Menu";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Menu />
    </Layout>
  );
}
