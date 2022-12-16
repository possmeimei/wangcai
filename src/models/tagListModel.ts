const localStorageKeyName = 'tagList';
type TagListModel = {
    data: string[]
    fetch: () => string[]
    create: (name: string) => boolean
    save: () => void
}
const tagListModel: TagListModel = {
    data: [],
    create(name) {
        if (this.data.indexOf(name) >= 0) {
            throw new Error('duplicated')
        }
        this.data.push(name);
        this.save();
        return true;
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
};
export default tagListModel;