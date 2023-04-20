import { Config } from "./config";
import { Layout } from "./layout";
import { Page } from "./page";

export interface App {
    loaded: boolean;
    
    config: {
        app: Config,
        site: Layout,
        page: Page
    };

    getConfig(): Object;

    buildPrefetch(): void;

    buildFavicon(): void;

    buildAttribution(): void;

    buildMeta(): void;

    updatePage(): void;

    setPage(page: Page): void;
}