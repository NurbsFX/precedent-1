import Image from 'next/image';
import { Label } from '../../components/ui/label';

export default function Pictures() {
    const pictures = [
        {
            id: 1,
            description: "Spécialiste en chirurgie et soins intensifs.",
            imageUrl: "/exemple.jpg",
        },
        {
            id: 2,
            description: "Vétérinaire généraliste et spécialiste en nutrition.",
            imageUrl: "/exemple2.jpg",
        },
    ];

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">Galerie photos</span>
                </h1>

                {/* Section Photos */}
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pictures.map((item) => (
                            <div key={item.id} className="flex flex-col items-center text-center">
                                {/* Conteneur ajusté avec dimensions maximales et effet hover */}
                                <div className="w-full max-w-xs transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={item.imageUrl}
                                        layout="responsive"
                                        width={400}
                                        height={400}
                                        className="rounded-md object-contain"
                                        alt={item.description}
                                    />
                                </div>
                                {/* Ajout de l'espacement entre l'image et la description */}
                                <div className="mt-4">
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
