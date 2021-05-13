const state = {
    costList:[
            {name:'canyin', tagcontent: '餐饮'},
            {name:'shuidianmei', tagcontent: '水电煤'},
            {name:'tongxun', tagcontent: '通讯'},
            {name:'xuexi', tagcontent: '学习'},
            {name:'yiliao', tagcontent: '医疗'},
            {name:'yule', tagcontent: '娱乐'},
            {name:'zhufang', tagcontent: '住房'},
            {name:'shejiao', tagcontent: '社交'},
            {name:'lingshi', tagcontent: '零食'},
            {name:'jujia', tagcontent: '居家'},
            {name:'jiaotong', tagcontent: '交通'},
            {name:'gouwu', tagcontent: '购物'},           
            {name:'fushi', tagcontent: '服饰'},            
    ],
    earnList: [
            {name:'qitashouru', tagcontent: '其它'},
            {name:'licaishouyi', tagcontent: '理财'},
            {name:'gongzi', tagcontent: '工资'},
            {name:'jiekuan', tagcontent: '借入'},
            {name:'jixiaojiangjin', tagcontent: '奖金'},
            {name:'ziyuan', tagcontent: '投资'},
    ],
    currentCostTag:'canyin',
    currentEarnTag:'qitashouru'
};
const mutations = {
    setCostTag(state:any, tagName:string){
        state.currentCostTag = tagName
        console.log(state.currentCostTag)
    },
    setEarnTag(state:any, tagName:string){
        state.currentEarnTag = tagName
        console.log(state.currentEarnTag)
    },
    createNewCostTag(state:any, obj:{name:string, content:string}){
        const contentArray=[];
        for(let i=0; i++; i<state.costList.length){
            contentArray.push(state.costList[i].tagcontent)
        }
        console.log(contentArray)
        
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
  