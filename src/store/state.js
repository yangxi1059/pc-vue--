var footermsg = "";
var homemsg = {};
if(localStorage.getItem('lang')=="zh"){
    footermsg = "上海：长宁区天山路 </br> 北京：朝阳区光华路"
}else{
    footermsg = "Shanghai: Tianshan Road, Changning District <br/> Beijing: Guanghua Road, Chaoyang District"
} 
export default {
    'homemsg':homemsg,
    'navdetail':{},
    'footermsg':footermsg
}