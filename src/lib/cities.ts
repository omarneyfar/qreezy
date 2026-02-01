export interface CityData {
    slug: string;
    cityName: string;
    title: string;
    description: string;
    intro: string;
    localContext: string;
}

export const CITIES: CityData[] = [
    {
        slug: 'tunis',
        cityName: 'Tunis',
        title: 'Menu QR Code Tunis | Solution pour Restaurants au Grand Tunis',
        description: 'Modernisez votre restaurant à Tunis avec Qreezy. Menu digital QR code et programme de fidélité pour les établissements de la capitale, La Marsa, Gammarth et Lac.',
        intro: 'Le Grand Tunis est le cœur de la gastronomie tunisienne. De la Medina aux berges du Lac, les restaurateurs adoptent le menu digital pour offrir une expérience premium.',
        localContext: 'Que vous gériez un bistro branché à Ennasr ou un restaurant gastronomique à La Marsa, Qreezy s\'adapte au dynamisme de la capitale.'
    },
    {
        slug: 'sousse',
        cityName: 'Sousse',
        title: 'Menu QR Code Sousse | Digitalisez votre Restaurant au Sahel',
        description: 'Solution de menu digital QR code pour les restaurants et hôtels à Sousse, Port El Kantaoui et tout le Sahel. Augmentez vos ventes et l\'hygiène.',
        intro: 'Sousse, perle du Sahel, est une destination touristique majeure. Un menu digital polyglotte est indispensable pour accueillir une clientèle internationale.',
        localContext: 'Optimisez le service en terrasse à Port El Kantaoui avec nos codes QR résistants et notre interface ultra-rapide.'
    },
    {
        slug: 'sfax',
        cityName: 'Sfax',
        title: 'Menu QR Code Sfax | Optimisez votre Restaurant à Sfax',
        description: 'Logiciel de menu QR code et fidélité pour les professionnels de la restauration à Sfax. Simplifiez vos opérations et fidélisez vos clients.',
        intro: 'Sfax est la capitale économique de la Tunisie. L\'efficacité et la rapidité de service sont les clés du succès pour les restaurateurs sfaxiens.',
        localContext: 'Réduisez le temps d\'attente dans vos établissements à Sfax grâce à la commande au menu via QR code.'
    }
];

export function getAllCities() {
    return CITIES;
}

export function getCityBySlug(slug: string) {
    return CITIES.find(c => c.slug === slug);
}
