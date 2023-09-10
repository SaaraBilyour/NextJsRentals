'use client';

import Container from "../Container"

import { IoDiamond, IoLeaf } from "react-icons/io5"
import { FaPaw } from "react-icons/fa"
import { TbBeach} from "react-icons/tb"
import { GiAmphora} from "react-icons/gi"

import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"
import { IoIosSnow } from "react-icons/io";

export const categories = [
    {
        label: 'Plage',
        icon: TbBeach,
        description:'Ce logement est proche de la plage!'
    },
    {
        label: 'Montagne',
        icon: IoIosSnow,
        description:'Ce logement est situé dans les montagnes!'
    },
    {
        label: 'Safari',
        icon: FaPaw,
        description:'Ce logement offre des safaris à proximité!'
    },
    {
        label: 'Culture locale',
        icon: GiAmphora,
        description:'Ce logement est proche de sites de culture locale!'
    },
    {
        label: 'Espaces verts',
        icon: IoLeaf,
        description:'Ce logement est entouré d\'espaces verts!'
    },
    {
        label: 'Luxe',
        icon: IoDiamond,
        description:'Ce logement est luxueux!'
    },
]




const Categories = () => {  
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="
                pt-1
                flex
                flex-row
                items-center
                justify-between
                oververflow-x-auto
                "
            >
                {categories.map((item) =>(
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label} 
                    icon={item.icon}
                    />
                ))}
                </div>
        </Container>
    );
}

export default Categories;