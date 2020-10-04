var trainingCompleted = false;

function Train(){
//  console.log(train0);
//  console.log(test);
  for (var i = 0; i < train0.shape[3]; i++) {
      //console.log(train0.pick(null, null, null, i).toString());
      var features = train0.pick(null,null,null,null,i);
      //reshape 
      features = features.reshape(120);
      //console.log(features.toString());
      
  }
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
