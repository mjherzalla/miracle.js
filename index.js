exports.getTableFromJson = function(Json)   {
    var obj, x, txt = "";
        txt += "<table border='1'>"
        for (x in Json) {
            var t=JSON.stringify(Json[x]);
        	var obj = JSON.parse(t);
            txt +="<tr>";
            var counter=0;
            
             for (y in obj){
               var str = Object.keys(obj).toString();               
			   var res = str.split(",");
               var s=res[counter];
                counter++;
             	txt += "<td>"+obj[s]+ "</td>";
             }
             txt +="</tr>";
        }
            txt += "</table>"        
    return txt;
}

exports.sortList = function (ListID) {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById(ListID);
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
    
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
