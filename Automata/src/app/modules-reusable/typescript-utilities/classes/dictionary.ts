export class Dictionary<T> {
    private items: { [index: string]: T } = {};
    private count = 0;
    private keys: string[] = [];
    private values: T[] = [];

    public ContainsKey = (key: string): boolean => this.items.hasOwnProperty(key);
    public Count = (): number => this.count;
    public Add(key: string, value: T) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
            this.keys.push(key);
        }
        this.values = this.values.filter(val => this.items[key] !== val);
        this.values.push(value);
        this.items[key] = value;
    }
    public Remove(key: string): T {
        const val = this.items[key];
        delete this.items[key];
        this.keys = this.keys.filter(keyVal => keyVal !== key);
        this.values = this.values.filter(value => value !== val);
        this.count--;
        return val;
    }
    public Item = (key: string): T => this.items[key];
    public Keys = (): string[] => this.keys;
    public Values = (): T[] => this.values;
}
