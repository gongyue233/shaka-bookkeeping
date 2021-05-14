import TagD from "@/help/tagd";
import store from "..";

const state = {
    costList:[
            {id:1, name:'canyin', tagContent: '餐饮'},
            {id:2, name:'shuidianmei', tagContent: '水电煤'},
            {id:3, name:'tongxun', tagContent: '通讯'},
            {id:4, name:'xuexi', tagContent: '学习学个比'},
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
    iconCost:[
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
    ],
    iconEarn:[
        {name:'qitashouru', tagContent: '其它'},
        {name:'licaishouyi', tagContent: '理财'},
        {name:'gongzi', tagContent: '工资'},
        {name:'jiekuan', tagContent: '借入'},
        {name:'jixiaojiangjin', tagContent: '奖金'},
        {name:'ziyuan', tagContent: '投资'},
    ]
};
const mutations = {  
    fetchTags(){
        const costList2 = JSON.parse(window.localStorage.getItem('costList') || '[]') ;
        if(costList2.length >= 3){
            state.costList = costList2
        }
    }
    ,
    setCurrentTah(state:any,payload:TagD){
        state.currentTag = payload;
    },
    updateTag(state:any, payload:TagD){
        const textCost = state.costList.map((item: TagD) => item.tagContent);
        const textEarn = state.earnList.map((item: TagD) => item.tagContent);
        // if(payload.name===''){alert('请确认标签图标')};
        // if(payload.tagContent===''){alert('请输入标签名')};  
        if(payload.name!=='' && payload.tagContent!==''){
            if(textCost.indexOf(state.currentTag.tagContent) >= 0){
                if(textCost.indexOf(payload.name) >= 0){
                    alert('标签名重复')
                }else{
                    state.costList[payload.id-1].tagContent = payload.tagContent;
                    state.costList[payload.id-1].name = payload.name;
                }           
            }else{
                if(textEarn.indexOf(payload.name) >= 0){
                    alert('标签名重复')
                }else{
                    state.earnList[payload.id-1].tagContent = payload.tagContent;
                    state.earnList[payload.id-1].name = payload.name;
                }             
            }
            store.commit('saveTags');
            state.currentTag = {};
        }else if(payload.name===''){
            alert('请确认标签图标')
        }else{
            alert('请输入标签名')
        }       
        
    },
    saveTags(){
        window.localStorage.setItem('costList', JSON.stringify(state.costList));
        window.localStorage.setItem('earnList', JSON.stringify(state.earnList))
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
  