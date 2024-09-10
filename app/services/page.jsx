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
    const medecine = [];

    const imagerieMedicale = [];

    const laboratoire = [];

    const chirurgie = [];

    const dermatologieOphtalmologie = [];

    const hospitalisation = [];

    const espaceConseil = [];

    return (
        <>
            <div className="z-10 w-full px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span className="block text-4xl md:text-7xl font-bold">Services</span>
                    <p
                        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 max-w-2xl mx-auto [text-wrap:balance] md:text-xl"
                        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                    >
                        Découvrez nos services vétérinaires pour garantir la santé et le bien-être de vos animaux : soins médicaux, imagerie, chirurgie, et plus encore.
                    </p>

                </h1>

                {/* Tabs for Categories */}
                <Tabs defaultValue="food" className="mt-10 w-full ">
                    <TabsList className="flex justify-center space-x-4">
                        <TabsTrigger value="medecine" className="text-base w-32">Médecine</TabsTrigger>
                        <TabsTrigger value="imagerieMedicale" className="text-base w-32">Imagerie médicale</TabsTrigger>
                        <TabsTrigger value="laboratoire" className="text-base w-32">Laboratoire</TabsTrigger>
                        <TabsTrigger value="chirurgie" className="text-base w-32">Chirurgie</TabsTrigger>
                        <TabsTrigger value="dermatologieOphtalmologie" className="text-base w-32 px-2 py-1 text-center">
                            Dermatologie
                            <br />
                            Ophtalmologie
                        </TabsTrigger>
                        <TabsTrigger value="hospitalisation" className="text-base w-32">Hospitalisation</TabsTrigger>
                        <TabsTrigger value="espaceConseil" className="text-base w-32">Espace conseil</TabsTrigger>
                    </TabsList>


                    {/* Content for Food */}
                    <TabsContent value="food">
                        <div className="mt-16">
                            Bonjour
                        </div>
                    </TabsContent>

                    {/* Content for Toys */}
                    <TabsContent value="toys">
                        <div className="mt-16">
                            Bonjour
                        </div>
                    </TabsContent>

                    {/* Content for Accessories */}
                    <TabsContent value="accessories">
                        <div className="mt-16">
                            Bonjour
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
}
