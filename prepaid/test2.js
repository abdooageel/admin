 var listof=[];
 function iterateElements(elements, index, callback) {
    if (index == elements)
       return callback(listof);
   	listof.push(index);
 	iterateElements(elements, index+1, callback);
 }


 iterateElements(20, 1, function(res) {
    console.log("Done all calls!");
    console.log(res);
 });