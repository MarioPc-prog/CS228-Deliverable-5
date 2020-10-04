var trainingCompleted = false;

function Train(){
  console.log(train0);
  console.log(test);
 
}
function Test(){
    
}
function draw(){
    clear();
    if (trainingCompleted === false){
         Train();
         trainingCompleted = true ; 
         
    }
    Test();
 } 
