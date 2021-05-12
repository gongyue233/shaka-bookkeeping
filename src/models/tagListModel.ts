const localStorageKeyName = 'tagList';

type TagListModel = {
    tagList: string[] //这里目前先以原本的 衣食住行 标签来写
    fetch:() => string[]
    save: () => void
    create: (name:string) => '标签名重复' | '新建标签成功'
}

const tagListModel = {
    tagList: ['衣','食','住','行'],
    fetch(){ 
        const tagLocalList = window.localStorage.getItem(localStorageKeyName);
        if(tagLocalList){
            this.tagList = JSON.parse(tagLocalList);
        }
        return this.tagList;
    },
    save(){ 
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
    },
    create(name: string){
        if(this.tagList.indexOf(name) >= 0){
            return '标签名重复';
        }
        this.tagList.push(name);
        this.save();
        return '新建标签成功';
    }
    
};
export default tagListModel;