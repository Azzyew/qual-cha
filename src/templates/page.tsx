import Image from 'next/image';

export interface PageTemplateData {
  scientificName: string;
  commonName: string[];
  symptoms: string[];
  image: string;
}

export const PageTemplate = ({
  scientificName,
  commonName,
  symptoms,
  image,
}: PageTemplateData) => (
  <>
    <h1>{scientificName}</h1>
    <br />
    <b>
      <h2>Nomes comuns:</h2>
    </b>
    <ul>
      {commonName.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <br />
    <b>
      <h2>Bom para:</h2>
    </b>
    <ul>
      {symptoms.map((gf) => (
        <li key={gf}>{gf}</li>
      ))}
    </ul>
    <Image
      src={image}
      alt={`Picture of ${scientificName}`}
      width={500}
      height={500}
    />
  </>
);
