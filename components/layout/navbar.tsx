"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { usePathname } from 'next/navigation';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LuDog } from "react-icons/lu";
import { PiCat } from "react-icons/pi";
import { PiRabbit } from "react-icons/pi";


export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const pathname = usePathname();

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        {/* Réduction du padding supérieur et de la hauteur */}
        <div className="mx-5 flex h-28 max-w-screen-xl items-center justify-between w-full pt-4">
          <div className="flex h-full items-center space-x-6">
            <Link href="/" className="flex items-center font-display text-4xl">
              <Label className="max-w-xs text-3xl text-left leading-tight break-words">
                Clinique vétérinaire
                <br />
                du marché
              </Label>
            </Link>

            {/* Menubar aligné avec les autres éléments */}
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Accueil</MenubarTrigger>
                <MenubarContent className="bg-white shadow-lg rounded-md">
                  <MenubarItem>
                    <Link href="#presentation">
                      Présentation
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="#actualites">
                      Actualités
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="#footer">
                      Informations utiles
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>La clinique</MenubarTrigger>
                <MenubarContent className="bg-white shadow-lg rounded-md">
                  <MenubarItem>
                    <Link href="/team">
                      L'équipe
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    Services
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/pics">
                      Visite et photos
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Fiches conseil</MenubarTrigger>
                <MenubarContent className="bg-white shadow-lg rounded-md">
                  <MenubarItem>
                    <Link className="flex items-center space-x-2" href="/dogs">
                      <LuDog />
                      <span>Chiens</span>
                    </Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link className="flex items-center space-x-2" href="/cats">
                      <PiCat />
                      <span>Chats</span>
                    </Link>
                  </MenubarItem>
                  <MenubarItem >
                    <Link className="flex items-center space-x-2" href="/nac">
                      <PiRabbit />
                      <span>Nouveaux Animaux de Compagnie</span>
                    </Link>
                  </MenubarItem>
                </MenubarContent>

              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <Link href="/shop">
                    Boutique
                  </Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <Link href="/adoption">
                    Adoption
                  </Link>
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>

          {/* Section droite de la barre de navigation */}
          {session ? (
            <UserDropdown session={session} />
          ) : (
            <Button
              className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
              onClick={() => setShowSignInModal(true)}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

