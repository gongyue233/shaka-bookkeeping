import TagD from "@/help/tagd";
import IconD from "@/help/icon";
import store from "..";
import creTagId from '@/lib/creTagId';


type TagState = {
    tagList:TagD[],
    currentTag: TagD,
    iconCost:IconD[],
    iconEarn: IconD[],
}
const state = {
    tagList:[
            {id:0, name:'canyin', tagContent: '餐饮', type: '-'},
            {id:1, name:'shuidianmei', tagContent: '水电煤',type: '-'},
            {id:2, name:'tongxun', tagContent: '通讯', type: '-'},
            {id:3, name:'xuexi', tagContent: '学习', type: '-'},
            {id:4, name:'yiliao', tagContent: '医疗', type: '-'},
            {id:5, name:'yule', tagContent: '娱乐', type: '-'},
            {id:6, name:'zhufang', tagContent: '住房', type: '-'},
            {id:7, name:'shejiao', tagContent: '社交', type: '-'},
            {id:8, name:'lingshi', tagContent: '零食', type: '-'},
            {id:9, name:'jujia', tagContent: '居家', type: '-'},
            {id:10, name:'jiaotong', tagContent: '交通', type: '-'},
            {id:11, name:'gouwu', tagContent: '购物', type: '-'},           
            {id:12, name:'fushi', tagContent: '服饰', type: '-'},  
            {id:13, name:'qitashouru', tagContent: '其它', type: '+'},
            {id:14, name:'licaishouyi', tagContent: '理财', type: '+'},
            {id:15, name:'gongzi', tagContent: '工资', type: '+'},
            {id:16, name:'jiekuan', tagContent: '借入', type: '+'},
            {id:17, name:'jixiaojiangjin', tagContent: '奖金', type: '+'},
            {id:18, name:'ziyuan', tagContent: '投资', type: '+'},          
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
        const tagList2 = window.localStorage.getItem('tagList');
        //如果不存在tagList2是null 
        if(tagList2){ state.tagList = JSON.parse(tagList2)}   
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
        const tagTextList = state.tagList.map((item: TagD) => item.tagContent);
        //标签名列表
        const id2 = state.currentTag.id;        
        if(payload.tagContent){            
            if(tagTextList.indexOf(payload.tagContent) >= 0 && state.tagList[id2].tagContent!== payload.tagContent){ 
                alert('标签名重复')
            }else{
                state.tagList[id2].tagContent = payload.tagContent;
                state.tagList[id2].name = payload.name;
                store.commit('saveTags');
            }                  
        }else{
            alert('请输入标签名')
        }
    },
    createNewTag(state:TagState, payload:{type:string, name:string, tagContent:string}):void{
        store.commit('fetchTags')
        if(payload.tagContent===''){ alert('未输入标签名');return;}
        const textTagList = state.tagList.map((item: TagD) => item.tagContent);       
        if(payload.type==='-' || payload.type==='+'){
            if(textTagList.indexOf(payload.tagContent) >= 0){
                alert('标签名重复')
            }else{
                const maxTagId = creTagId();
                state.tagList
                    .push({id:maxTagId,name:payload.name, tagContent:payload.tagContent, type:payload.type});
                store.commit('saveTags');
            }
        }else{
            alert('未确定标签类型')
        }
    },
    saveTags(state:TagState):void{
        window.localStorage.setItem('tagList', JSON.stringify(state.tagList));    
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
  