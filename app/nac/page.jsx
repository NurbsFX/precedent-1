"use client";
import Image from 'next/image';
import { useState } from 'react'; // Importer useState pour gérer l'état de recherche
import { Input } from "@/components/ui/input"
import { FaPaw } from "react-icons/fa"; // Icône générique pour les NAC

export default function Shop() {
    const nacs = [
        {
            id: 1,
            name: 'Lapin Nain',
            description: "Le lapin nain est un animal doux, affectueux et relativement facile à élever. Il nécessite un espace où il peut se déplacer librement.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Il a besoin d'un espace propre, d'une alimentation équilibrée à base de foin et de légumes frais, et d'interactions régulières avec son propriétaire.",
            esperanceDeVie: "8-12 ans",
        },
        {
            id: 2,
            name: 'Cochon d\'Inde',
            description: "Le cochon d'Inde est un animal social et docile, souvent recommandé pour les familles avec enfants. Il aime être manipulé avec douceur.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Il doit être maintenu dans un enclos spacieux, avec une alimentation riche en foin, légumes frais, et en vitamine C.",
            esperanceDeVie: "5-7 ans",
        },
        {
            id: 3,
            name: 'Hérisson Africain',
            description: "Le hérisson africain est un animal nocturne, indépendant et relativement facile à entretenir. Il aime explorer son environnement.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Il a besoin d'une alimentation équilibrée à base d'insectes, et d'un environnement sécurisé. Manipulez-le avec précaution en raison de ses piquants.",
            esperanceDeVie: "3-5 ans",
        },
        {
            id: 4,
            name: 'Furet',
            description: "Le furet est un animal curieux et très joueur. Il aime explorer son environnement et a besoin de beaucoup d'interaction avec son propriétaire.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Un environnement sécurisé et beaucoup de jouets sont essentiels. Il doit être vacciné et avoir une alimentation à base de viande.",
            esperanceDeVie: "6-10 ans",
        },
        {
            id: 5,
            name: 'Tortue de Terre',
            description: "La tortue de terre est un animal calme et résistant. Elle nécessite un enclos spacieux en plein air et aime s'enterrer pour se reposer.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Assurez-vous de fournir un environnement adapté avec des zones d'ombre et de soleil. Son alimentation doit être riche en légumes verts.",
            esperanceDeVie: "50-100 ans",
        },
        {
            id: 6,
            name: 'Serpent des Blés',
            description: "Le serpent des blés est un reptile docile, facile à manipuler et recommandé pour les débutants. Il est nocturne et aime les espaces calmes.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Un terrarium bien aménagé et une alimentation à base de rongeurs sont essentiels. Manipulez-le régulièrement pour le rendre sociable.",
            esperanceDeVie: "15-20 ans",
        },
        {
            id: 7,
            name: 'Perroquet Gris du Gabon',
            description: "Le Perroquet Gris du Gabon est un oiseau intelligent et bavard. Il nécessite beaucoup de stimulation mentale et d'interaction.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Il doit avoir une cage spacieuse et de nombreux jouets interactifs. Il a besoin d'une alimentation variée et équilibrée.",
            esperanceDeVie: "40-60 ans",
        },
        {
            id: 8,
            name: 'Axolotl',
            description: "L'axolotl est un amphibien aquatique fascinant, connu pour sa capacité à régénérer ses membres. Il vit exclusivement dans l'eau.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Maintenez un aquarium propre avec une eau fraîche. Il se nourrit principalement de vers et de petits poissons.",
            esperanceDeVie: "10-15 ans",
        },
    ];

    // État pour le texte de recherche
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrer les NACs en fonction de la saisie utilisateur
    const filteredNacs = nacs.filter((nac) =>
        nac.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">
                        <FaPaw /> {/* Icône pour les NAC */}
                        Nouveaux Animaux de Compagnie
                    </span>
                </h1>

                {/* Input de recherche */}
                <div className="mt-8 flex justify-center">
                    <Input
                        placeholder="Rechercher un NAC..."
                        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:border-blue-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour le terme de recherche
                    />
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredNacs.map((nac) => (
                            <div key={nac.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
                                {/* Conteneur ajusté avec dimensions maximales et effet hover */}
                                <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={nac.imageUrl}
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        className="rounded-lg object-contain"
                                        alt={nac.name}
                                    />
                                </div>
                                <div className="mt-4 w-full text-left"> {/* Alignement à gauche avec w-full */}
                                    <h3 className="text-xl font-semibold text-center">{nac.name}</h3> {/* Titre centré */}
                                    {/* Espérance de vie ajoutée et centrée */}
                                    <p className="text-sm text-gray-500 text-center">Espérance de vie : {nac.esperanceDeVie}</p>
                                    <p className="mt-2 text-gray-500">{nac.description}</p> {/* Description alignée à gauche */}
                                    {/* Conseils spécifiques à la race */}
                                    <p className="mt-4 text-gray-700 font-medium">Conseils :</p>
                                    <p className="text-gray-600">{nac.conseils}</p> {/* Conseils alignés à gauche */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
