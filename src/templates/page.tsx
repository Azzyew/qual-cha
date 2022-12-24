import Image from 'next/image';

export interface PageTemplateData {
  scientificName: string;
  commonName: string[];
  goodFor: string[];
  image: string;
}

export const PageTemplate = ({
  scientificName,
  commonName,
  goodFor,
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
      {goodFor.map((gf) => (
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
