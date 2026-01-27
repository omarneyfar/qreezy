import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PrivacyPolicy() {
    return (
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <SectionHeader title="Politique de Confidentialité" centered={false} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <p>Dernière mise à jour : 27 janvier 2026</p>
                    <h3>1. Introduction</h3>
                    <p>Chez Qreezy, nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique vous informe sur la manière dont nous traitons vos données lors de votre visite sur notre site.</p>
                    <h3>2. Données Collectées</h3>
                    <p>Lorsque vous utilisez notre formulaire de devis, nous collectons les informations suivantes : Nom, Email, Nom de l'entreprise, Type d'activité, Ville/Pays et votre message. Ces informations sont utilisées uniquement pour répondre à votre demande.</p>
                    <h3>3. Utilisation des Données</h3>
                    <p>Nous utilisons les données collectées pour vous fournir les informations demandées, préparer des devis personnalisés et communiquer sur nos services.</p>
                    <h3>4. Sécurité</h3>
                    <p>Vos données sont stockées de manière sécurisée et ne sont accessibles qu'au personnel autorisé de Qreezy. Nous ne vendons ni ne partageons vos données avec des tiers.</p>
                </div>
            </div>
        </Section>
    );
}
