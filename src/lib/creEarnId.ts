let MaxEarnId:number = parseInt(window.localStorage.getItem('MaxEarnId') || '6');
function creEarnId(){
    MaxEarnId++;
    window.localStorage.setItem('MaxEarnId', MaxEarnId.toString());
    return MaxEarnId;
}
export default creEarnId;