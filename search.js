function autocomplete(inp){
   var s = localStorage.getItem('names');
	var arr = s.split(',');

	for(var i = 0; i < arr.length; i++) {
	  	   arr[i] = arr[i].replace(/^\s*/, "").replace(/\s*$/, "");
	  
	}
   //var inp=document.getElementById("search_box");
   var currentFocus = -1;
   inp.addEventListener("input",function(e){
      //console.log(arr[0]);
     document.getElementById("search_list").innerHTML = "";
     const ul = document.getElementById("search_list");
     var val = this.value;
     if(!val)
     	return false;
     var b;
     for(i=0;i<arr.length;i++){
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()){

            	  b = document.createElement("DIV")
		          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
		          b.innerHTML += arr[i].substr(val.length);
		          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		          b.setAttribute("id",arr[i]);
		          b.setAttribute("value",arr[i]);
		          b.addEventListener("click", function(e) {
		              inp.value = this.getAttribute("value");
		              document.getElementById("search_list").innerHTML = "";
                  });
                  ul.appendChild(b);  

            }
       } 
      
   });

   inp.addEventListener("keydown", function(e) {
      var x = document.getElementById("search_list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
                addActive(x);
      } else if (e.keyCode == 13) {
        
        e.preventDefault();
        if (currentFocus > -1) {
        
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    
    if (!x) return false;
    
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  document.addEventListener("click", function (e) {
    document.getElementById("search_list").innerHTML = "";
}); 

}
