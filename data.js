const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/todos';
counter=0;

Http.onreadystatechange = function(){
	var data=JSON.parse(Http.responseText);

 //document.write(data)
 //console.log(data);
 var content="";
content+=""
for (var x = 0; x < data.length; x++) {
	content +=`<li type="none"> <input type="checkbox" class="checkBox"${data[x].completed===true?' checked disabled':''}> ${data[x].title}</li>`;
	
//	content +=$("#demo").append('<input type="checkbox" /> ' +data[x].title + '<br />');
//	content += "<br>";
}

content +=""
document.getElementById("demo").innerHTML=content;
 console.log(content);
}
Http.open("GET", url);
Http.send();

var promise=new Promise(function(resolve,reject) {
	$("#demo").change(function(event){
		if($(this).prop("checked",true)){
			counter=counter+1;
			if(counter==5)
			{
				resolve("Congrats! 5 Tasks have been Successfully Completed");
			}
		}
		else{
			counter=counter-1;
			reject("");
		}
	});
});
promise
.then(function(s){
	alert(s);
})
.catch(function(e){
	alert(e);
})