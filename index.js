
export function getTableFromJson(Json){
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

