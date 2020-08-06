import { config } from './config';

if (!config.showHeaderAndSidebar) {
    const appHeaderEl = document.getElementById('appHeader');
    if (appHeaderEl) {
        appHeaderEl.style.display = 'none';
    }

    const appSidebarEl = document.getElementById('appSidebar');
    if (appSidebarEl) {
        appSidebarEl.style.display = 'none';
    }

    const appMainEl = document.getElementById('appMain');
    if (appMainEl) {
        appMainEl.style.paddingLeft = '16px';
    }
}