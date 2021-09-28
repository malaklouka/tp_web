
function validateMyForm(){
	
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;;
	var date = document.getElementById("bdate").value;;
	var sex = document.getElementsByName("sex");
	var sex_value = "";
	for(var i = 0; i < sex.length; i++){
		if(sex[i].checked){
			sex_value = sex[i].value;
		}
	}
	
	if(fname !== "" && lname !== "" && date !== ""){
		alert(fname + "\n" + lname + "\n" + date + "\n" +sex_value + "\n");
	}else{
		alert("Empty fields...");
	}
   
}
function toggleFM(e){
	var legends = document.getElementsByTagName("legend");
	var fields = document.getElementsByTagName("fieldset");
	var title = document.getElementsByTagName("h1")[0];
	var inputs = document.getElementsByClassName("text_input");
	var btn = document.getElementById("btn");
	
	if(e.value == "male"){
		for(var i = 0; i < fields.length; i++){
			fields[i].style.borderColor = "red";
		}
		for(var i = 0; i < legends.length; i++){
			legends[i].style.color = "red";
		}
		for(var i = 0; i < inputs.length; i++){
			inputs[i].style.borderColor = "red";
		}
		title.innerHTML = "Hello Sir";
		btn.style.borderColor = "red";
	}else if(e.value == "female"){
		for(var i = 0; i < fields.length; i++){
			fields[i].style.borderColor = "blue";
		}
		for(var i = 0; i < legends.length; i++){
			legends[i].style.color = "blue";
		}
		for(var i = 0; i < inputs.length; i++){
			inputs[i].style.borderColor = "blue";
		}
		title.innerHTML = "Hello Madame";
		btn.style.borderColor = "blue";
	}
	
}