let MaxCostId:number = parseInt(window.localStorage.getItem('MaxTagId') || '18') || 18;
function creTagId(){
    MaxCostId++;
    window.localStorage.setItem('MaxTagId', MaxCostId.toString());
    return MaxCostId;
}
export default creTagId;   // cost支出的 标签id号