let MaxCostId:number = parseInt(window.localStorage.getItem('MaxCostId') || '13');
function creCostId(){
    MaxCostId++;
    window.localStorage.setItem('MaxCostId', MaxCostId.toString());
    return MaxCostId;
}
export default creCostId;