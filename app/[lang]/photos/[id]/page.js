import PhotoDetails from "@/components/PhotoDetails";

export default async function PhotoDetailsPage({ params }) {
  const { lang, id } = await params;
  return <PhotoDetails id={id} lang={lang} />;
}
