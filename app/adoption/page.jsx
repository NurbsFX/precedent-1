import Image from 'next/image';
import { FaPaw } from 'react-icons/fa'; // Icône pour les boutons
import { Label } from '../../components/ui/label';

export default function Adoption() {
    const annonces = [
        {
            id: 1,
            name: 'Snoopy',
            age: '2 ans',
            description: "Chien très affectueux et joueur, cherche une famille aimante.",
            imageUrl: "/exemple3.jpg",
            contact: "06 12 34 56 78",
        },
        {
            id: 2,
            name: 'Mimi',
            age: '3 ans',
            description: "Chat calme et câlin, idéal pour une famille.",
            imageUrl: "/exemple3.jpg",
            contact: "06 12 34 56 78",
        },
    ];

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">Adoption</span>
                    <p
                        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
                        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                    >
                        Tout ce qu'il faut savoir pour adopter un compagnon.
                    </p>
                </h1>

                {/* Liens Utiles */}
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-bold mb-6">Liens utiles</h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <a
                            href="https://www.la-spa.fr/adoption/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-700 transition duration-300"
                        >
                            <FaPaw />
                            <span>Adopter via la SPA</span>
                        </a>
                        <a
                            href="https://ecoleduchat.asso.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
                        >
                            <FaPaw />
                            <span>L'école du Chat</span>
                        </a>
                    </div>
                </div>

                {/* Petites annonces */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-center mb-6">Petites annonces</h2>
                    <p className="text-center text-gray-500 mb-10">
                        Les annonces ponctuelles sont fréquentes à la clinique, n'hésitez pas à nous contacter.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {annonces.map((annonce) => (
                            <div key={annonce.id} className="flex flex-col items-center text-center max-w-xs mx-auto"> {/* Ajout de max-w-xs et mx-auto */}
                                {/* Conteneur ajusté avec dimensions maximales et effet hover */}
                                <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={annonce.imageUrl}
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        className="rounded-lg object-contain"
                                        alt={annonce.description}
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold">{annonce.name}</h3>
                                    <p className="text-gray-600">{annonce.age}</p>
                                    <p className="mt-2 text-gray-500">{annonce.description}</p>
                                    <p className="mt-2 font-bold text-gray-700">Contact : {annonce.contact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}
