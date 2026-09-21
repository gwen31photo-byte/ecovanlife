import { TextLink, PageIntro } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="404 — UN PETIT DÉTOUR"
        title="Cette route s’arrête ici."
        description="La page que vous cherchez n’existe pas, mais d’autres aventures vous attendent."
      />
      <div className="section listing">
        <TextLink href="/">Retrouver l’accueil</TextLink>
      </div>
    </>
  );
}
