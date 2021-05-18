import RecordItem from "@/help/custom";
import store from "..";
import clone from '@/lib/clone';
import creId from '@/lib/creId';
type RecordState={
    recordCostList:RecordItem[],
    recordEarnList:RecordItem[]
}

const state = {
    recordCostList: [],
    recordEarnList: []    
}
const mutations = {
    fetchRecord(state:RecordState):void{ //获取数据
        state.recordCostList = JSON.parse(window.localStorage.getItem('recordCostList') || '[]');    
        state.recordEarnList = JSON.parse(window.localStorage.getItem('recordEarnList') || '[]');     
    },
    saveRecord(state:RecordState):void{ //保存数据
        window.localStorage.setItem('recordEarnList', JSON.stringify(state.recordEarnList));
        window.localStorage.setItem('recordCostList', JSON.stringify(state.recordCostList));
    },
    createNewRecord(state:RecordState,newRecord:RecordItem):void{        
        const record2 = clone(newRecord)
        record2.createAt = new Date().toISOString(); 
        record2.id = creId();       
        if(record2.type==="+"){state.recordEarnList.push(record2)}
        if(record2.type==='-'){state.recordCostList.push(record2)}
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