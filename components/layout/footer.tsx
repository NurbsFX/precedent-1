import { Label } from "@/components/ui/label";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaRegCalendarCheck, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { FaUserNurse } from "react-icons/fa";
import { MdImportContacts } from "react-icons/md";


export default function Footer() {
  return (
    <div
      id="footer"
      className="flex absolute justify-center w-full py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-screen-lg">

        {/* Horaires */}
        <div>
          <Label className="text-lg font-bold flex items-center space-x-2">
            <FaRegCalendarCheck />
            <span>Horaires</span>
          </Label>
          <div className="mt-2 space-y-1">
            <span>Du lundi au vendredi : 9h – 19h30</span>
            <br />
            <span>Le samedi : 9h – 18h</span>
            <br />
            <span>Dimanche et jours fériés : 9h30 – 13h00</span>
          </div>
          <div className="mt-2 space-y-1">
            <span className="font-bold">Sur rendez-vous & visites à domicile</span>
          </div>
        </div>

        {/* Docteurs */}
        <div>
          <Label className="text-lg font-bold flex items-center space-x-2">
            <FaUserNurse />
            <span>Nos docteurs</span>
          </Label>
          <div className="mt-2 space-y-1">
            <span>Dr. Laurence Berdah</span>
            <br />
            <span>Dr. Caroline Fournier</span>
            <br />
            <span>Dr. Léa Picarda</span>
            <br />
            <span>Dr. Yaël Picarda</span>
          </div>
          <div className="mt-2 space-y-1">
            <span className="font-bold">Accueil toute la journée</span>
          </div>
        </div>

        {/* Coordonnées */}
        <div>
          <Label className="text-lg font-bold flex items-center space-x-2">
            <MdImportContacts />
            <span>Coordonnées</span>
          </Label>
          <div className="mt-2 space-y-2">
            <span className="font-bold">Clinique Vétérinaire du Marché</span>

            {/* Adresse */}
            <div className="flex">
              {/* Bloc icône + "Adresse :" à gauche */}
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Adresse :</span>
              </div>

              {/* Bloc adresse à droite avec retour à la ligne */}
              <div className="ml-2">
                <Link href="https://maps.app.goo.gl/qiU9UyTdYyenQH1w9" target="_blank" rel="noopener noreferrer">
                  <span className="text-blue-500 block">30 rue Montrosier</span>
                  <span className="text-blue-500 block">92200 Neuilly-sur-Seine</span>
                </Link>
              </div>
            </div>


            {/* Téléphone */}
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>Tél :</span>
              <a href="tel:+33146246929" className="text-blue-500">+33 1 46 24 69 29</a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <IoIosMail />
              <span>Mail :</span>
              <a href="mailto:contact@veto-neuilly.fr" className="text-blue-500">
                contact@veto-neuilly.fr
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
