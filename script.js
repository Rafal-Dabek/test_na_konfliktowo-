

function show_table()
{
  
  if (document.getElementById("result_section1").style.display == "none")
        document.getElementById("result_section1").style.display="block";
    else if(document.getElementById("result_section1").style.display="block")
        document.getElementById("result_section1").style.display="none";


        if (document.getElementById("result_section2").style.display == "none")
        document.getElementById("result_section2").style.display="block";
    else if(document.getElementById("result_section2").style.display="block")
        document.getElementById("result_section2").style.display="none";

        if (document.getElementById("result_section3").style.display == "none")
        document.getElementById("result_section3").style.display="block";
    else if(document.getElementById("result_section3").style.display="block")
        document.getElementById("result_section3").style.display="none";

        if (document.getElementById("result_section4").style.display == "none")
        document.getElementById("result_section4").style.display="block";
    else if(document.getElementById("result_section4").style.display="block")
        document.getElementById("result_section4").style.display="none";

        if (document.getElementById("result_section5").style.display == "none")
        document.getElementById("result_section5").style.display="block";
    else if(document.getElementById("result_section5").style.display="block")
        document.getElementById("result_section5").style.display="none";

        if (document.getElementById("result_section6").style.display == "none")
        document.getElementById("result_section6").style.display="block";
    else if(document.getElementById("result_section6").style.display="block")
        document.getElementById("result_section6").style.display="none";

        if (document.getElementById("result_section7").style.display == "none")
        document.getElementById("result_section7").style.display="block";
    else if(document.getElementById("result_section7").style.display="block")
        document.getElementById("result_section7").style.display="none";

        if (document.getElementById("result_section8").style.display == "none")
        document.getElementById("result_section8").style.display="block";
    else if(document.getElementById("result_section8").style.display="block")
        document.getElementById("result_section8").style.display="none";
 

  
}

var is_pressed=false;
function done(){
  var suma=0;
  
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
 


if((d.length)!=11){
  alert("Nie wszytkie odpowiedzi są zaznaczone")
}

if(d.length==11){
  for(i=0;i<p.length;i++){

    suma+=parseInt(p[i]);
    }
  is_pressed=true;
  console.log(suma);
  

}


}















