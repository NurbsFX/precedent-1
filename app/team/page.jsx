import Image from 'next/image';
import { Label } from '../../components/ui/label';

export default function Team() {
    const doctors = [
        {
            id: 1,
            name: "Dr. Marie Dupont",
            description: "Spécialiste en chirurgie et soins intensifs.",
            imageUrl: "/exemple.jpg",
        },
        {
            id: 2,
            name: "Dr. Claire Martin",
            description: "Vétérinaire généraliste et spécialiste en nutrition.",
            imageUrl: "/exemple.jpg",
        },
    ];

    const assistants = [
        {
            id: 1,
            name: "Sophie Lefevre",
            description: "Assistante vétérinaire spécialisée en soins post-opératoires.",
            imageUrl: "/exemple.jpg",
        },
        {
            id: 2,
            name: "Julie Bernard",
            description: "Assistante vétérinaire avec une passion pour les animaux exotiques.",
            imageUrl: "/exemple.jpg",
        },
    ];

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">L'équipe</span>
                </h1>

                {/* Section Docteures */}
                <div className="mt-10">
                    <Label className="text-3xl font-bold mb-8 text-left pl-4 md:pl-20">Nos docteurs</Label>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {doctors.map((item) => (
                            <div key={item.id} className="flex flex-col items-center text-center space-y-4">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    width={200}
                                    height={200}
                                    className="rounded-md object-cover"
                                />
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Assistantes Vétérinaires */}
                <div className="mt-16">
                    <Label className="text-3xl font-bold mb-8 text-left pl-4 md:pl-20">Nos assistantes vétérinaires</Label>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {assistants.map((item) => (
                            <div key={item.id} className="flex flex-col items-center text-center space-y-4">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    width={200}
                                    height={200}
                                    className="rounded-md object-cover"
                                />
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
