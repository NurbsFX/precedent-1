import Image from 'next/image';
import { FaPaw } from 'react-icons/fa'; // Icône pour les boutons
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


export default function Shop() {
    const toys = [
        {
            id: 1,
            name: 'Balle interactive',
            description: "Cette balle rebondissante avec lumière LED garde votre chien ou chat actif et diverti.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            prix: '15€',
        },
        {
            id: 2,
            name: 'Corde à mâcher',
            description: "Idéale pour les chiens qui adorent mâcher, cette corde résistante est parfaite pour les jeux de traction.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            prix: '12€',
        },
        {
            id: 3,
            name: 'Souris en peluche',
            description: "Une souris en peluche douce avec de l'herbe à chat, parfaite pour divertir votre chat pendant des heures.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            prix: '8€',
        },
    ];

    const food = [
        {
            id: 1,
            name: 'Croquettes premium pour chien',
            age: 'Adultes (1-7 ans)',
            description: "Croquettes riches en protéines pour une alimentation équilibrée et saine, adaptées aux chiens adultes.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            contact: "Contactez-nous pour en savoir plus.",
        },
        {
            id: 2,
            name: 'Pâtée pour chaton',
            age: 'Chaton (0-1 an)',
            description: "Pâtée humide spécialement formulée pour la croissance des chatons. Riche en vitamines et minéraux.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            contact: "Contactez-nous pour des conseils nutritionnels.",
        },
        {
            id: 3,
            name: 'Friandises hypoallergéniques',
            age: 'Tous âges',
            description: "Friandises sans gluten et sans produits laitiers, idéales pour les chiens ayant des sensibilités alimentaires.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            contact: "Disponibilité en boutique ou sur commande.",
        },
    ];

    const accessoires = [
        {
            id: 1,
            name: 'Collier en cuir',
            description: "Collier en cuir véritable, ajustable et durable, conçu pour le confort de votre chien.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            contact: "Contactez-nous pour les tailles disponibles.",
        },
        {
            id: 2,
            name: 'Laisse rétractable',
            description: "Laisse rétractable pour une promenade en toute liberté. Disponible en plusieurs longueurs.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            contact: "Disponible en boutique.",
        },
        {
            id: 3,
            name: 'Brosse pour poils courts',
            description: "Brosse ergonomique conçue pour les chiens et chats à poils courts, favorisant un pelage soyeux.",
            imageUrl: "/exemple3.jpg",  // Image temporaire
            contact: "Commandez en ligne ou en boutique.",
        },
    ];

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">Boutique</span>
                    <p
                        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 max-w-2xl mx-auto [text-wrap:balance] md:text-xl"
                        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                    >
                        Découvrez notre sélection d&apos;articles pour le bien-être et le confort de vos animaux : alimentation, jouets, accessoires, et bien plus encore !
                    </p>
                </h1>

                {/* Tabs for Categories */}
                <Tabs defaultValue="food" className="mt-10 w-full ">
                    <TabsList className="flex justify-center space-x-4">
                        <TabsTrigger value="food" className="text-xl w-32">Alimentation</TabsTrigger>
                        <TabsTrigger value="toys" className="text-xl w-32">Jouets</TabsTrigger>
                        <TabsTrigger value="accessories" className="text-xl w-32">Accessoires</TabsTrigger>
                    </TabsList>

                    {/* Content for Food */}
                    <TabsContent value="food">
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-center mb-6">Alimentation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {food.map((item) => (
                                    <div key={item.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
                                        <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                            <Image
                                                src={item.imageUrl}
                                                layout="responsive"
                                                width={400}
                                                height={400}
                                                className="rounded-lg object-contain"
                                                alt={item.description}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold">{item.name}</h3>
                                            <p className="text-gray-600">{item.age}</p>
                                            <p className="mt-2 text-gray-500">{item.description}</p>
                                            <p className="mt-2 font-bold text-gray-700">Contact : {item.contact}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    {/* Content for Toys */}
                    <TabsContent value="toys">
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-center mb-6">Jouets</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {toys.map((item) => (
                                    <div key={item.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
                                        <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                            <Image
                                                src={item.imageUrl}
                                                layout="responsive"
                                                width={400}
                                                height={400}
                                                className="rounded-lg object-contain"
                                                alt={item.description}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold">{item.name}</h3>
                                            <p className="mt-2 text-gray-500">{item.description}</p>
                                            <p className="mt-2 font-bold text-gray-700">Prix : {item.prix}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    {/* Content for Accessories */}
                    <TabsContent value="accessories">
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-center mb-6">Accessoires</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {accessoires.map((item) => (
                                    <div key={item.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
                                        <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                            <Image
                                                src={item.imageUrl}
                                                layout="responsive"
                                                width={400}
                                                height={400}
                                                className="rounded-lg object-contain"
                                                alt={item.description}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold">{item.name}</h3>
                                            <p className="mt-2 text-gray-500">{item.description}</p>
                                            <p className="mt-2 font-bold text-gray-700">Contact : {item.contact}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
