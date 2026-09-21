import { PageIntro } from "@/components/ui";
export const metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="INFORMATIONS DU SITE"
        title="Mentions légales"
        description="Modèle à compléter avant la mise en ligne publique."
      />
      <div className="article-body">
        <h2>Éditeur du site</h2>
        <p>
          EcoVanLife — ecovanlife.fr. Identité de l’éditeur, statut, adresse,
          contact et responsable de publication : à renseigner par le
          propriétaire avant publication.
        </p>
        <h2>Hébergement</h2>
        <p>
          Déploiement envisagé sur une offre Node.js Hostinger. Les coordonnées
          légales de l’hébergeur et les informations de l’offre retenue sont à
          compléter avant publication.
        </p>
        <h2>Contenus de démonstration</h2>
        <p>
          Les récits, itinéraires, couvertures et concepts de produits sont
          fictifs. Les photographies d’illustration proviennent d’Unsplash ;
          leurs sources sont répertoriées dans le fichier
          public/images/CREDITS.md du projet. Elles ne représentent pas les
          voyages personnels de l’éditeur.
        </p>
        <h2>Disponibilité commerciale</h2>
        <p>
          Aucun produit ni ebook n’est vendu dans cette version. Les conditions
          de vente seront ajoutées lors de l’ouverture effective de la boutique.
        </p>
      </div>
    </>
  );
}
