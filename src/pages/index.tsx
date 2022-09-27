import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { CupHero } from '../components/CupHero';
import Head from 'next/head';
import { Info } from '../components/Info';

const Index = () => (
  <>
    <Head>
      <title>Qual Chá</title>
    </Head>
    <Container height="100vh">
      <Main>
        <Info />
        <CupHero />
      </Main>

      <Footer />
    </Container>
  </>
);

export default Index;
