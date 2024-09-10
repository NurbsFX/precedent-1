"use client";
import Image from 'next/image';
import { FaPaw } from 'react-icons/fa'; // Icône pour les boutons
import { useState } from 'react'; // Importer useState pour gérer l'état de recherche
import { Input } from "@/components/ui/input"
import { LuDog } from "react-icons/lu";

export default function Shop() {
    const dogs = [
        {
            id: 1,
            name: 'Labrador Retriever',
            description: "Le Labrador Retriever est un chien intelligent, affectueux, et énergique. Il est idéal pour les familles et excelle dans les activités physiques.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Ce chien a besoin de beaucoup d'exercice quotidien. Il est important de lui fournir une alimentation équilibrée pour éviter les problèmes de poids.",
            esperanceDeVie: "10-12 ans",
        },
        {
            id: 2,
            name: 'Berger Allemand',
            description: "Le Berger Allemand est une race polyvalente, utilisée dans de nombreux métiers comme chien policier, de sauvetage ou de garde. C'est un chien loyal et protecteur.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Il a besoin de stimulation mentale et physique pour rester en bonne santé. L'entraînement à l'obéissance est essentiel dès son plus jeune âge.",
            esperanceDeVie: "9-13 ans",
        },
        {
            id: 3,
            name: 'Golden Retriever',
            description: "Le Golden Retriever est connu pour son tempérament doux et amical. C'est un excellent compagnon pour les familles et les enfants.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Cette race nécessite un toilettage régulier pour maintenir son pelage en bonne condition. Les longues promenades sont également essentielles pour sa santé mentale et physique.",
            esperanceDeVie: "10-12 ans",
        },
        {
            id: 4,
            name: 'Bouledogue Français',
            description: "Le Bouledogue Français est une race de chien affectueuse et pleine de caractère. Il est parfait pour la vie en appartement.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Évitez les activités intenses, surtout par temps chaud, car cette race est sujette aux problèmes respiratoires. Une alimentation surveillée est aussi nécessaire pour éviter l'obésité.",
            esperanceDeVie: "10-12 ans",
        },
        {
            id: 5,
            name: 'Beagle',
            description: "Le Beagle est un chien curieux et énergique. Son excellent flair en fait un bon chien de chasse ou de détection.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Ce chien a besoin de beaucoup d'exercice pour dépenser son énergie. Soyez vigilant car il a tendance à suivre les odeurs, il est donc conseillé de le promener en laisse.",
            esperanceDeVie: "12-15 ans",
        },
        {
            id: 6,
            name: 'Shiba Inu',
            description: "Le Shiba Inu est une race indépendante avec un fort instinct de chasse. C'est un chien courageux et alerte.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Il peut être têtu, donc une éducation ferme et cohérente est nécessaire. Il n'est pas toujours sociable avec les autres chiens, mais s'il est bien socialisé, il peut être un excellent compagnon.",
            esperanceDeVie: "12-15 ans",
        },
        {
            id: 7,
            name: 'Chihuahua',
            description: "Le Chihuahua est le plus petit des chiens, mais il possède une grande personnalité. Il est fidèle et adore la compagnie de son maître.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Faites attention à sa petite taille fragile, surtout avec les enfants en bas âge. Une socialisation précoce est importante pour éviter qu'il devienne trop protecteur ou anxieux.",
            esperanceDeVie: "12-20 ans",
        },
        {
            id: 8,
            name: 'Border Collie',
            description: "Le Border Collie est un chien extrêmement intelligent et énergique, utilisé souvent pour le travail de troupeau. Il apprend rapidement et excelle dans les sports canins.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Ce chien a besoin d'une grande stimulation mentale et physique. Il n'est pas recommandé pour les propriétaires peu actifs ou inexpérimentés.",
            esperanceDeVie: "12-15 ans",
        },
    ];

    // État pour le texte de recherche
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrer les chiens en fonction de la saisie utilisateur
    const filteredDogs = dogs.filter((dog) =>
        dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">
                        Chiens
                    </span>
                </h1>

                {/* Input de recherche */}
                <div className="mt-8 flex justify-center">
                    <Input
                        placeholder="Rechercher une race de chien..."
                        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:border-blue-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour le terme de recherche
                    />
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredDogs.map((dog) => (
                            <div key={dog.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
                                {/* Conteneur ajusté avec dimensions maximales et effet hover */}
                                <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={dog.imageUrl}
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        className="rounded-lg object-contain"
                                        alt={dog.name}
                                    />
                                </div>
                                <div className="mt-4 w-full text-left"> {/* Alignement à gauche avec w-full */}
                                    <h3 className="text-xl font-semibold text-center">{dog.name}</h3> {/* Titre centré */}
                                    {/* Espérance de vie ajoutée et centrée */}
                                    <p className="text-sm text-gray-500 text-center">Espérance de vie : {dog.esperanceDeVie}</p>
                                    <p className="mt-2 text-gray-500">{dog.description}</p> {/* Description alignée à gauche */}
                                    {/* Conseils spécifiques à la race */}
                                    <p className="mt-4 text-gray-700 font-medium">Conseils :</p>
                                    <p className="text-gray-600">{dog.conseils}</p> {/* Conseils alignés à gauche */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
