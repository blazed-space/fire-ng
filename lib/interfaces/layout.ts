export interface FooterLink {
    header: string;
    body: {
        text: string;
        link: string;
    }[];
};
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