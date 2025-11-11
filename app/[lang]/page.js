import { getDictionary } from "./disctionaries";

export default async function Home({ params: paramsPromise }) {
  const { lang } = await paramsPromise;
  const dictionary = await getDictionary(lang);

  return <div>{dictionary.uploadedOn}</div>;
}
