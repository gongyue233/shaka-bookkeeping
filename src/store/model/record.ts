import RecordItem from "@/help/custom";
import store from "..";

const state = {
    recordCostList: [] as RecordItem[],
    recordEarnList: [] as RecordItem[],    
};
const mutations ={
    fetchRecord(state:any){ //获取数据
        console.log('执行了store的record模块')
        state.recordCostList = JSON.parse(window.localStorage.getItem('recordCostList') || '[]');    
        state.recordEarnList = JSON.parse(window.localStorage.getItem('recordEarnList') || '[]');      

    },
    saveRecord(state:any){ //保存数据
        window.localStorage.setItem('recordEarnList', JSON.stringify(state.recordEarnList));
        window.localStorage.setItem('recordCostList', JSON.stringify(state.recordCostList));

    },
    createNewRecord(state:any,newRecord:RecordItem){        
        const record2 = JSON.parse(JSON.stringify(newRecord));
        record2.createAt = new Date();
        if(record2.type==="+"){
            state.recordEarnList.push(record2)  
        }else{
            state.recordCostList.push(record2)
        }
        store.commit('saveRecord')
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