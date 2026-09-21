import { PageIntro } from "@/components/ui";
export const metadata = {
  title: "Confidentialité",
  robots: { index: false, follow: true },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="VOS DONNÉES"
        title="Confidentialité"
        description="Le fonctionnement de cette première version, en toute simplicité."
      />
      <div className="article-body">
        <h2>Newsletter de démonstration</h2>
        <p>
          Le formulaire valide le format de l’adresse dans votre navigateur puis
          affiche un message de démonstration. L’adresse n’est ni transmise à un
          serveur, ni stockée. Aucun e-mail n’est envoyé.
        </p>
        <h2>Cookies et mesure d’audience</h2>
        <p>
          Cette version n’intègre aucun outil publicitaire, service de mesure
          d’audience ou cookie applicatif. Les photographies sont servies depuis
          le site.
        </p>
        <h2>Hébergement et évolution du site</h2>
        <p>
          L’hébergeur peut traiter des journaux techniques nécessaires au
          fonctionnement du service. Les modalités de conservation et le contact
          de l’éditeur devront être précisés avant publication. Cette page devra
          être adaptée avant d’activer une newsletter, des statistiques ou des
          achats.
        </p>
      </div>
    </>
  );
}
