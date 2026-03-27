'use client'

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation"

export const SelectLanguage = () => {

    const router = useRouter();
    const pathName = usePathname();
    const currentLocale = useLocale();

    const changeLanguage = (newLocale: string) => {
        const newPathName = pathName.replace(
            `/${currentLocale}`,
            `/${newLocale}`
        );

        router.push(newPathName)
    }

    return (
        <select onChange={e => changeLanguage(e.target.value)} value={currentLocale}>
            <option value="en">en</option>
            <option value="es">es</option>
            <option value="fr">fr</option>
        </select>
    )
}
