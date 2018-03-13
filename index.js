


function getTableFromJson(Json,ColomsNames){
    
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    //myObj = JSON.parse(this.responseText);
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
var myObj = [{"_id":"5aa1a197f5d0d91400969ef6","name":"medo","email":"miracle@yahoo.com","password":"moon2006","avatar":"1","profileURL":"1","githubUrl":"1","LastUpdate":"1520542103","__v":0},{"_id":"5aa1a22c85d5481400cf6216","name":"medo2","email":"miracle2@yahoo.com","password":"moon2006","avatar":"1","profileURL":"1","githubUrl":"1","LastUpdate":"1520542252","__v":0},{"_id":"5aa1a23f85d5481400cf6217","name":"medo2","email":"miracle3@yahoo.com","password":"moon2006","avatar":"1","profileURL":"1","githubUrl":"1","LastUpdate":"1520542271","__v":0},{"_id":"5aa1a5669a3e38083d760629","name":"medo2","email":"miracle9@yahoo.com","password":"moon2006","avatar":"1","profileURL":"1","githubUrl":"1","LastUpdate":"1520543078","__v":0},{"_id":"5aa1a6e4c4cc0db4018a7bcd","name":"medo2","email":"miracle10@yahoo.com","password":"moon2006","avatar":"1","profileURL":"1","githubUrl":"1","LastUpdate":"1520543460","__v":0},{"_id":"5aa1a77d7abe42140088a3d6","name":"medo2","email":"miracle6@yahoo.com","password":"moon2006","avatar":"1","profileURL":"1","githubUrl":"1","LastUpdate":"1520543613","__v":0},{"_id":"5aa1b24a7abe42140088a3db","name":"a","email":"a","password":"a","avatar":"0","profileURL":"0","githubUrl":"0","LastUpdate":"1520546378","__v":0},{"_id":"5aa1b3a47abe42140088a3dd","name":"a","email":"aa","password":"aaa","avatar":"0","profileURL":"0","githubUrl":"0","LastUpdate":"1520546724","__v":0},{"_id":"5aa1b3df7abe42140088a3de","name":"aa","email":"aaa","password":"aaaa","avatar":"0","profileURL":"0","githubUrl":"0","LastUpdate":"1520546783","__v":0},{"_id":"5aa1b40f7abe42140088a3df","name":"asd","email":"asd","password":"asd","avatar":"0","profileURL":"0","githubUrl":"0","LastUpdate":"1520546831","__v":0},{"_id":"5aa1b4347abe42140088a3e0","name":"asdwww","email":"asdww","password":"asdww","avatar":"0","profileURL":"0","githubUrl":"0","LastUpdate":"1520546868","__v":0},{"_id":"5aa1b4bc7abe42140088a3e1","name":"qq","email":"qq","password":"qq","avatar":"0","profileURL":"0","githubUrl":"0","LastUpdate":"1520547004","__v":0}];
console.log(getTableFromJson(myObj,'name,age'));


