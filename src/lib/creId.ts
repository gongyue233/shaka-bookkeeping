let MaxId:number = parseInt(window.localStorage.getItem('MaxId') || '0') || 0 ;
function creId(){
    MaxId++;
    window.localStorage.setItem('MaxId', MaxId.toString());
    return MaxId;
}
export default creId;