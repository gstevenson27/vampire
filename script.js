let button = document.querySelector("button");
  let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let img = document.querySelector ("img");
button.onclick = function(){
  console.log("button checks");

let answer1 = input1.value;
 console.log(answer1);
 let answer2 = input2.value;
 console.log(answer2);




  
  if (answer1 === "yes" && answer2 === "yes"){
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIMCIXQT-J72VJBlotmMWdekPFHWEUF4chQ&s";
   console.log("Stephan");
  }
  
 
 else if(answer1 === "yes" && answer2 === "no"){ img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ55Ylx3r3SqqHY7TDHN_4iAI90ICtaphOoA&s";
    console.log("Damon");  }
  
  
 else if(answer1 === "no" && answer2 === "yes"){ img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWc-0vbriUEvnBq5arEOyjBK7_b_qbiK-USw&s";
    console.log("Caroline");
  }
  
  else if(answer1 === "no" && answer2 === "no"){ img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1SW25ZkUk5_hZe9bKlJL4b1JPbk3wtyJrrA&s"
    console.log("Elena");
  }
  
};