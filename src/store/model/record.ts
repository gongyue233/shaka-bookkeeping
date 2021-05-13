import RecordItem from "@/help/custom";
import store from "..";

const state = {
    localStorageKeyName: 'recordlist',
    recordList: [] as RecordItem[],
};
const mutations ={
    fetchRecord(state:any){ //获取数据
        console.log('执行了store的record模块')
        state.recordList = JSON.parse(window.localStorage.getItem(state.localStorageKeyName) || '[]');      
    },
    saveRecord(state:any){ //保存数据
        window.localStorage.setItem(state.localStorageKeyName, JSON.stringify(state.recordList));
    },
    createNewRecord(state:any,newRecord:RecordItem){        
        const record2 = JSON.parse(JSON.stringify(newRecord));
        record2.createAt = new Date();
        state.recordList.push(record2)
        store.commit('saveRecord')
    },
    clear(state:any){
        state.recordList = []
    }
}

export default {
    state,
    mutations,
    actions: {
    },
    modules: {
    }
}