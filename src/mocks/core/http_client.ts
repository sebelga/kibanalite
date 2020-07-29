export const http = {
    async get(url: string, options: any) {
        return window.fetch(url);
    }
}