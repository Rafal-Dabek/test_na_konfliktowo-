var is_pressed=false;

function done(){


  var mentor=0;
  var A=0;
  var B=0;
  var C=0;
  var D=0;
  var E=0;
  var F=0;
  
  var ele = document.getElementsByTagName('input');
    

       


     
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                 
                }
                    

            }
        


          }


  var p=Array.from(d);
 
for(i=0;i<d.length;i++){

if(d[i]=="A")A++; 
if(d[i]=="B")B++; 
if(d[i]=="C")C++; 
if(d[i]=="D")D++;
if(d[i]=="E")E++; 
if(d[i]=="F")F++;
}

if((A+B+C+D+E+F)!=21){
  alert("Nie wszytkie odpowiedzi są zaznaczone")
}

if(A+B+C+D+E+F==21 && (is_pressed==false)){
  is_pressed=true;
  console.log(is_pressed);
  if(A>C){
    document.getElementById("punkty_1").innerHTML
    +=  "W";
   
  }
  if(A<C){
    document.getElementById("punkty_1").innerHTML
    +=  "K";
    
  }
  if(D>F){
    document.getElementById("punkty_1").innerHTML
    +=  "S";
  }
  if(D<F){
    document.getElementById("punkty_1").innerHTML
    +=  "Z";
  }
  if(B>E){
    document.getElementById("punkty_1").innerHTML
    +=  "W";
    
  }
  if(B<E){
    document.getElementById("punkty_1").innerHTML
    +=  "Z";
   
  }

}


}















