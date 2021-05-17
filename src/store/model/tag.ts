import TagD from "@/help/tagd";
import IconD from "@/help/icon";
import store from "..";
import creCostId from '@/lib/creCostId';
import creEarnId from '@/lib/creEarnId';


type TagState = {
    costList:TagD[],
    earnList:TagD[],
    currentTag: TagD,
    iconCost:IconD[],
    iconEarn: IconD[],
}
const state = {
    costList:[
            {id:1, name:'canyin', tagContent: '餐饮'},
            {id:2, name:'shuidianmei', tagContent: '水电煤'},
            {id:3, name:'tongxun', tagContent: '通讯'},
            {id:4, name:'xuexi', tagContent: '学习'},
            {id:5, name:'yiliao', tagContent: '医疗'},
            {id:6, name:'yule', tagContent: '娱乐'},
            {id:7, name:'zhufang', tagContent: '住房'},
            {id:8, name:'shejiao', tagContent: '社交'},
            {id:9, name:'lingshi', tagContent: '零食'},
            {id:10, name:'jujia', tagContent: '居家'},
            {id:11, name:'jiaotong', tagContent: '交通'},
            {id:12, name:'gouwu', tagContent: '购物'},           
            {id:13, name:'fushi', tagContent: '服饰'},            
    ],
    earnList: [
            {id:1, name:'qitashouru', tagContent: '其它'},
            {id:2, name:'licaishouyi', tagContent: '理财'},
            {id:3, name:'gongzi', tagContent: '工资'},
            {id:4, name:'jiekuan', tagContent: '借入'},
            {id:5, name:'jixiaojiangjin', tagContent: '奖金'},
            {id:6, name:'ziyuan', tagContent: '投资'},
    ],
    currentTag:{},
    iconCost:Object.freeze([ //不可变的图标表
        {name:'canyin', tagContent: '餐饮'},
        {name:'shuidianmei', tagContent: '水电煤'},
        {name:'tongxun', tagContent: '通讯'},
        {name:'xuexi', tagContent: '学习'},
        {name:'yiliao', tagContent: '医疗'},
        {name:'yule', tagContent: '娱乐'},
        {name:'zhufang', tagContent: '住房'},
        {name:'shejiao', tagContent: '社交'},
        {name:'lingshi', tagContent: '零食'},
        {name:'jujia', tagContent: '居家'},
        {name:'jiaotong', tagContent: '交通'},
        {name:'gouwu', tagContent: '购物'},           
        {name:'fushi', tagContent: '服饰'},    
    ]),
    iconEarn:Object.freeze([
        {name:'qitashouru', tagContent: '其它'},
        {name:'licaishouyi', tagContent: '理财'},
        {name:'gongzi', tagContent: '工资'},
        {name:'jiekuan', tagContent: '借入'},
        {name:'jixiaojiangjin', tagContent: '奖金'},
        {name:'ziyuan', tagContent: '投资'},
    ]),
} as TagState;
const mutations = {  
    fetchTags(state:TagState):void{
        const costList2 = window.localStorage.getItem('costList');
        //如果不存在costList2是null
        const earnList2 = window.localStorage.getItem('earnList');   
        if(costList2){ state.costList = JSON.parse(costList2)}        
        if(earnList2){ state.earnList = JSON.parse(earnList2)}     

    },
    setCurrentTah(state:TagState,payload:TagD):void{
        state.currentTag = payload;
        window.localStorage.setItem('currentTag',JSON.stringify(state.currentTag));
    },
    fetchCurrentTag(state:TagState):void{
        const currentTag2 = window.localStorage.getItem('currentTag');
        if(currentTag2){ state.currentTag = JSON.parse(currentTag2)}
    },
    updateTag(state:TagState, payload:{name:string, tagContent:string}):void{
        const textCost = state.costList.map((item: TagD) => item.tagContent);//标签名列表
        const textEarn = state.earnList.map((item: TagD) => item.tagContent);
        const id2 = state.currentTag.id;        
        if(payload.tagContent){
            if(textCost.indexOf(state.currentTag.tagContent) >= 0){//原本在支出列表
                if(textCost.indexOf(payload.tagContent) >= 0){ //新名字与支出列表的标签名重复
                    alert('标签名重复')
                }else{
                    state.costList[id2-1].tagContent = payload.tagContent;
                    state.costList[id2-1].name = payload.name;
                    store.commit('saveTags');
                }           
            }
            if(textEarn.indexOf(state.currentTag.tagContent) >= 0){
                if(textEarn.indexOf(payload.tagContent) >= 0){
                    alert('标签名重复')
                }else{
                    state.earnList[id2-1].tagContent = payload.tagContent;
                    state.earnList[id2-1].name = payload.name;
                    store.commit('saveTags');
                }             
            }            
        }else{
            alert('请输入标签名')
        }
    },
    createNewTag(state:TagState, payload:{type:string, name:string, tagContent:string}):void{
        store.commit('fetchTags')
        const textCost = state.costList.map((item: TagD) => item.tagContent);
        const textEarn = state.earnList.map((item: TagD) => item.tagContent);        
        if(payload.type==='-'){
            if(textCost.indexOf(payload.tagContent) >= 0){
                alert('标签名重复')
            }else{
                const costId = creCostId();
                state.costList.push({id:costId,name:payload.name, tagContent:payload.tagContent});
                store.commit('saveTags');
            }
        }
        if(payload.type==='+'){
            if(textEarn.indexOf(payload.tagContent) >= 0){
                alert('标签名重复')
            }else{
                const earnId = creEarnId();
                state.earnList.push({id:earnId,name:payload.name, tagContent:payload.tagContent});
                store.commit('saveTags');
            }
        }
    },
    saveTags(state:TagState):void{
        window.localStorage.setItem('costList', JSON.stringify(state.costList));
        window.localStorage.setItem('earnList', JSON.stringify(state.earnList));    
    },

}

export default {
    state,
    mutations,
    actions: {
    },
    modules: {
    }
}
  