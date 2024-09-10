"use client";
import Image from 'next/image';
import { useState } from 'react'; // Importer useState pour gérer l'état de recherche
import { Input } from "@/components/ui/input"
import { FaCat } from "react-icons/fa"; // Icône pour les chats

export default function Shop() {
    const cats = [
        {
            id: 1,
            name: 'Persan',
            description: "Le Persan est un chat tranquille avec un tempérament calme. C'est un chat affectueux, idéal pour les personnes vivant en appartement.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Le Persan nécessite un brossage quotidien pour maintenir son pelage en bon état. Il préfère un environnement calme.",
            esperanceDeVie: "12-17 ans",
        },
        {
            id: 2,
            name: 'Siamois',
            description: "Le Siamois est un chat très sociable et vocal. Il aime la compagnie des humains et est souvent décrit comme très bavard.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Assurez-vous de donner suffisamment d'attention au Siamois, car il a tendance à s'ennuyer rapidement.",
            esperanceDeVie: "15-20 ans",
        },
        {
            id: 3,
            name: 'Maine Coon',
            description: "Le Maine Coon est une des plus grandes races de chats. Il est affectueux, joueur, et s'entend bien avec les enfants et autres animaux.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Le Maine Coon a besoin de beaucoup d'espace et d'exercice. Son pelage long nécessite un toilettage régulier.",
            esperanceDeVie: "12-15 ans",
        },
        {
            id: 4,
            name: 'British Shorthair',
            description: "Le British Shorthair est un chat robuste avec un tempérament calme et détendu. C'est un excellent compagnon de famille.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Bien que son pelage soit court, un brossage hebdomadaire est recommandé pour éviter les boules de poils.",
            esperanceDeVie: "14-20 ans",
        },
        {
            id: 5,
            name: 'Bengal',
            description: "Le Bengal est une race très active, avec une énergie débordante. Il est connu pour son apparence sauvage et son pelage tacheté.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Ce chat a besoin de beaucoup de stimulation et d'exercice quotidien. Un arbre à chat et des jouets interactifs sont essentiels.",
            esperanceDeVie: "12-16 ans",
        },
        {
            id: 6,
            name: 'Sphynx',
            description: "Le Sphynx est une race sans poils, connue pour son apparence unique. Il est affectueux et aime se blottir contre son maître.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Le Sphynx nécessite des bains réguliers pour garder sa peau propre. Il est sensible aux températures froides.",
            esperanceDeVie: "9-15 ans",
        },
        {
            id: 7,
            name: 'Ragdoll',
            description: "Le Ragdoll est un chat doux et docile, connu pour sa capacité à se détendre complètement lorsqu'il est pris dans les bras.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "Le Ragdoll a besoin d'un toilettage régulier pour éviter les nœuds dans son pelage. Il préfère un environnement calme et stable.",
            esperanceDeVie: "15-20 ans",
        },
        {
            id: 8,
            name: 'Abyssin',
            description: "L'Abyssin est un chat actif et curieux. Il est très joueur et aime grimper partout.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            conseils: "L'Abyssin a besoin de beaucoup de stimulation mentale. Fournissez-lui des jouets et des espaces pour grimper.",
            esperanceDeVie: "9-15 ans",
        },
    ];

    // État pour le texte de recherche
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrer les chats en fonction de la saisie utilisateur
    const filteredCats = cats.filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">
                        <FaCat /> {/* Icône pour les chats */}
                        Chats
                    </span>
                </h1>

                {/* Input de recherche */}
                <div className="mt-8 flex justify-center">
                    <Input
                        placeholder="Rechercher une race de chat..."
                        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:border-blue-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour le terme de recherche
                    />
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredCats.map((cat) => (
                            <div key={cat.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
                                {/* Conteneur ajusté avec dimensions maximales et effet hover */}
                                <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={cat.imageUrl}
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        className="rounded-lg object-contain"
                                        alt={cat.name}
                                    />
                                </div>
                                <div className="mt-4 w-full text-left"> {/* Alignement à gauche avec w-full */}
                                    <h3 className="text-xl font-semibold text-center">{cat.name}</h3> {/* Titre centré */}
                                    {/* Espérance de vie ajoutée et centrée */}
                                    <p className="text-sm text-gray-500 text-center">Espérance de vie : {cat.esperanceDeVie}</p>
                                    <p className="mt-2 text-gray-500">{cat.description}</p> {/* Description alignée à gauche */}
                                    {/* Conseils spécifiques à la race */}
                                    <p className="mt-4 text-gray-700 font-medium">Conseils :</p>
                                    <p className="text-gray-600">{cat.conseils}</p> {/* Conseils alignés à gauche */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
