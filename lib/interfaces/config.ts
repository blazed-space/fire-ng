/*
    @Name = Config
    @Desc = Main app configuration interface
*/
export interface Config {
    title: string;
    email: string;
    phone: string;
    theme: string;
    company: string;
    dns: {
        preconnect: string[],
        prefetch: string[]
    };
    icon: string;
    license: string;
    author: string;
    browserconfig?: string;
    social: {
        twitter: {
            handle: string;
            url: string
        };
        facebook:{
            url: string;
            app?: string;
        };
        linkedin:{
            url: string;
        };
        instagram: {
            url: string;
        };
    };
    image: string;
    description: string;
};