document.getElementById('inputfile') 
.addEventListener('change', function() { 
  
var fr=new FileReader(); 

fr.onload=function(){ 
    document.getElementById('output') 
            .textContent=fr.result; 
} 
  
  fr.readAsDataURL(this.files[0]);
 
 }) 

