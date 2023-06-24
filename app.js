




const dest=new Date("June 28, 2023 10:00:00").getTime();
const x=setInterval(function(){


const now =new Date().getTime();

const diff=dest-now;

const days=Math.floor(diff/(1000*60*60*24));
console.log(days);




const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
console.log(hours);


const minutes=Math.floor((diff%(1000*60*60)) /(1000*60));
console.log(minutes);
 const second= Math.floor((diff%(1000*60))/1000);
 console.log(second);

 document.getElementById("demo").innerHTML= days+ "d,"+hours + "hrs: " + minutes + "m: "+ second+"s"


},1000);


//const endDate ="25 June 2023 9:00 PM"
//document.getElementById("end-date").innerText = endDate;
//const inputs=document.querySelectorAll("input")

//set the time to ending 



//const clock 



//function clock(){
    
  // const end = new Date(endDate)
   //const now = new Date()
    //console.log(end,now)
    //const diff=end-now; //converd second
    //console.log(diff);
    //inputs[0].value=Math.floor(diff/(1000*3600*24)); //single number , days calcu [quesn]
    //inputs[1].value=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
     //remender ,hours
    //inputs[2].value=Math.floor(diff/60)%60;//minutes
    //inputs[3].value=Math.floor(diff)%60;//second
    //convered into day


    
//}
// initial call
//clock();







































//call again all time

//setInterval(
 //()=>{
   //   clock()
//},1000
//)