export class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            function (c: string) {
                const r = Math.floor(Math.random() * 16),
                    v = c === 'x' ? r : (r % 4 + 4);
                return v.toString(16);
            }).toUpperCase();
    }
}
