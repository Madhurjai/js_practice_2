function myfunc(){
    hr = document.getElementById('hour').value ;
    temp = document.querySelectorAll('input[name = "convert"]') ;
    if(hr == ""){
        alert("please enetr hour !!");
    }
     for(const i of temp){
         if(i.checked){
         let val = parseInt(i.value)*parseInt(hr) ;
         document.getElementById('demo').innerHTML = val;
         break ;}

   }}