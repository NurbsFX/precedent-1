import { Label } from "@/components/ui/label";

export default function Footer() {
  return (
    <div className="flex absolute w-full py-10">
      <div className="mx-auto px-10 grid grid-cols-1 md:grid-cols-2">
        {/* Horaires */}
        <div>
          <Label className="text-lg font-bold">Horaires</Label>
          <br />
          <Label>Du lundi au vendredi : 9h – 19h30</Label>
          <br />
          <Label>Le samedi : 9h – 18h</Label>
          <br />
          <Label>Dimanche et jours fériés : 9h30 – 13h00</Label>
          <br />
          <Label className="font-bold">Sur rendez-vous & visites à domicile</Label>
        </div>

        {/* Coordonnées */}
        <div>
          <Label className="text-lg font-bold">Coordonnées</Label>
          <br />
          <Label className="font-bold">Clinique Vétérinaire du Marché</Label>
          <br />
          <Label>30, rue Montrosier, 92200 Neuilly-sur-Seine</Label>
          <br />
          <Label>Tél : +33 1 46 24 69 29</Label>
          <Label className="ml-4">Fax : 01 46 24 82 45</Label> {/* Ajout d'un espace entre Tél et Fax */}
          <br />
          <Label>
            <a href="mailto:contact@veto-neuilly.fr" className="text-blue-500">
              contact@veto-neuilly.fr
            </a>
          </Label>
        </div>


      </div>
    </div>
  );
}
