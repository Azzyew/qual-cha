import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import client from '../graphql/client';
import { GET_TEAS, GET_TEA_BY_SLUG } from '../graphql/queries';
import { PageTemplate, PageTemplateData } from '../templates/page';

export default function TeaPage({
  scientificName,
  commonName,
  symptoms,
  image,
}: PageTemplateData) {
  const router = useRouter();

  if (router.isFallback) return null; //COLOCAR LOADING AQUI

  return (
    <PageTemplate
      scientificName={scientificName}
      commonName={commonName}
      symptoms={symptoms}
      image={image}
    />
  );
}

export async function getStaticPaths() {
  const { teas } = await client.request(GET_TEAS);

  const paths = teas.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { teas } = await client.request(GET_TEA_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!teas) return { notFound: true };

  return {
    props: {
      scientificName: teas[0].scientificName,
      commonName: teas[0].commonName,
      symptoms: teas[0].symptoms,
      image: teas[0].image?.url,
    },
  };
};
