
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const newsItems = [
  {
    id: 1,
    title: "Ouverture de notre nouvelle clinique",
    description: "Nous sommes heureux de vous annoncer l'ouverture d'une nouvelle clinique au cœur de la ville.",
    date: "2024-09-24",
  },
  {
    id: 2,
    title: "Journée de vaccination gratuite",
    description: "Rejoignez-nous pour une journée de vaccination gratuite pour tous les animaux domestiques.",
    date: "2024-10-05",
  },
  {
    id: 3,
    title: "Conseils d'alimentation pour votre animal",
    description: "Découvrez nos derniers conseils pour une alimentation saine de vos animaux.",
    date: "2024-11-12",
  },
];

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsItems.length);
    }, 3000); // Changer de slide toutes les 3 secondes
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % newsItems.length);
  };

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + newsItems.length) % newsItems.length);
  };

  // Fonction pour formater la date
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="z-10 w-full px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <span className="text-4xl md:text-6xl font-bold">Bienvenue à</span>
          <br />
          <span className="block text-4xl md:text-7xl font-bold">La Clinique Vétérinaire du Marché</span>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Prenez soin de vos animaux avec notre expertise.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link href="https://www.instagram.com/cliniqueveterinairedumarche/" target="_blank">
            <Button
              className="group flex items-center space-x-3 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-2 text-sm text-white transition-transform transform hover:scale-105"
            >
              <IoLogoInstagram className="h-6 w-6 text-white group-hover:text-gray-200" />
              <span>Suivez-nous sur Instagram !</span>
            </Button>
          </Link>


        </div>

        <div
          id="presentation"
          className="mx-auto mt-10 flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 space-y-5 md:space-y-0 px-5 md:px-20"
        >
          {/* Texte de présentation à droite */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-5 md:p-10">
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Bienvenue sur le site internet de <strong>La Clinique Vétérinaire du Marché</strong>, regroupant toutes les informations nécessaires sur nos prestations et services, un aperçu de notre clinique et les informations pratiques pour nous joindre.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Toute l’équipe est à votre disposition pour le bien-être et la santé de vos compagnons. Dans notre clinique, nous nous occupons des chiens, des chats, des oiseaux ainsi que des petits mammifères (lapin, furet, rongeurs, hérisson, etc.)
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              La santé de votre animal de compagnie est au centre de nos préoccupations : un plateau technique performant et innovant allié aux compétences et disponibilités des infirmières et des vétérinaires permettent une prise en charge efficace de votre animal.
              Nous sommes aussi présents pour toute urgence vétérinaire.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Bonne visite,
            </p>
            <p className="text-gray-600 text-lg leading-relaxed italic mt-2">
              Les docteurs Berdah, Fournier, Picarda et leur équipe.
            </p>
          </div>

          {/* Image de l'équipe à gauche */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/exemple.jpg" // Remplace cela par le chemin de l'image réelle
              alt="Équipe de la Clinique"
              width={400}
              height={300}
              className="rounded-lg shadow-lg p-2 md:p-4"
            />
          </div>

        </div>

        <div
          id="acutalites"
          className="mt-10 flex justify-center">
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              {newsItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">
                          {item.title}
                        </CardTitle>
                        {/* Affichage discret de la date */}
                        <p className="text-sm text-gray-400 mt-1">
                          {formatDate(item.date)}
                        </p>
                      </CardHeader>

                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                        {/* Affiche l'image si elle existe */}
                        <p className="text-center text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>


      </div >

    </>
  );
}
