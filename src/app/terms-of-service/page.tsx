import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TermsOfService() {
    return (
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <SectionHeader title="Conditions d'Utilisation" centered={false} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <p>Dernière mise à jour : 27 janvier 2026</p>
                    <h3>1. Acceptation des Conditions</h3>
                    <p>En accédant ou en utilisant notre site web, vous acceptez d'être lié par ces Conditions d'Utilisation.</p>
                    <h3>2. Description du Service</h3>
                    <p>Qreezy fournit un site vitrine présentant nos solutions de menu digital et programme de fidélité QR. Le site est destiné à l'information et à la génération de prospects.</p>
                    <h3>3. Propriété Intellectuelle</h3>
                    <p>Tout le contenu de ce site, y compris les textes, graphiques, logos et logiciels, est la propriété de Qreezy ou de ses fournisseurs de contenu et est protégé par les lois internationales sur le droit d'auteur.</p>
                    <h3>4. Limitation de Responsabilité</h3>
                    <p>Qreezy ne pourra être tenu responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser le site.</p>
                </div>
            </div>
        </Section>
    );
}
