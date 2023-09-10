'use client'; 
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

import { IconType } from "react-icons";

// Définition de l'interface pour les props du composant CategoryBox.
interface CategoryBoxProps {
    icon: IconType; // Icone à afficher
    label: string; // Texte à afficher
    selected?: boolean; 
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected,
}) => {
    const router = useRouter(); 
    const params = useSearchParams(); 
    // Création d'une fonction pour gérer le clic sur le composant
    const handleClick = useCallback(() => {
        let currentQuery = {};

        // Si des paramètres sont présents, les parser en objet
        if(params) {
            currentQuery = qs.parse(params.toString());
        }

        // Création d'une nouvelle requête incluant la catégorie sélectionnée
        const updatedQuery: any = {
            ...currentQuery,
            category: label,
        }

        // Si la catégorie sélectionnée est déjà dans la requête, la supprimer
        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        // Création de l'URL mise à jour avec la nouvelle requête
        const url =qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });  

        // Naviguer vers l'URL mise à jour
        router.push(url);
    }, [label, params, router]);
    return (          
            <div className="text-sm font-medium text-slate-500">
                <span className={`
            flex
            flex-row
            items-center
            justify-center
            gap-1
            px-5
            hover:text-amber-100
            transition
            cursor-pointer
            ${selected ? "border-b-neutral-800" : "border-transparent"}
            ${selected ? "text-amber-100" : "text-orange-200"}
            `} onClick={handleClick}>
                <Icon  size={18} color={'bg-gray-600'} />{label}
                </span>
            </div>   

    );
}

export default CategoryBox;

// Résumé :
// CategoryBox est un composant React qui rend une icône et une étiquette. 
// Lorsque l'utilisateur clique sur ce composant, l'URL actuelle est mise à jour pour inclure ou supprimer la catégorie représentée par le composant. 
// Le composant utilise plusieurs hooks pour obtenir et mettre à jour les informations de navigation, 
// ainsi que pour gérer les clics de l'utilisateur de manière optimisée.