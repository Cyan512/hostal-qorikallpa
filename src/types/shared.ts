import {ButtonVariant} from "@/src/types/ButtonVariant";

export type Link = {
    id: number;
    label: string;
    url: string;
    type: string;
    open_in_new_tab: boolean;
    variant: ButtonVariant;
}