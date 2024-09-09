import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import { IoLogoInstagram } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
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
              <IoLogoInstagram className="h-5 w-5 text-white group-hover:text-gray-200" />
              <span>Suivez-nous sur Instagram !</span>
            </Button>
          </Link>


        </div>


      </div>

    </>
  );
}
