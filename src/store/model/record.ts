import RecordItem from "@/help/custom";
import store from "..";
import clone from '@/lib/clone';
import creId from '@/lib/creId';
import dayjs from "dayjs";

type RecordState = {
    recordList:RecordItem[],
}

const state = {
    recordList: [], 
}
const mutations = {
    fetchRecord(state:RecordState):void{ //获取数据
        state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]'); 
    },
    saveRecord(state:RecordState):void{ //保存数据
        window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createNewRecord(state:RecordState,newRecord:RecordItem):void{        
        const record2 = clone(newRecord)
        record2.createAt = record2.createAt || dayjs().format('YYYY-MM-DD'); 
        console.log('record2的创建时间')
        console.log(record2.createAt)
        record2.id = creId();       
        state.recordList.push(record2);
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