import { FooterLink } from './footer-link';

export interface Layout{
    logo: string;
    nav: {
        text: string;
        href?: string;
        link?: string;
    }[];
    burgerVisible: boolean;
    footerLinks: FooterLink[]
};