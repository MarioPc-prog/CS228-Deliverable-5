var trainingCompleted = false;
var numSamples = 2;
var testingSampleIndex = 0;
var predictedClassLabels = nj.zeros(2);
const knnClassifier = ml5.KNNClassifier();

function Train(){
    //console.log(train0);
    //console.log(test);
    trainingCompleted = true;
    for (var i = 0; i < train7.shape[3]; i++) {
        var features = train7.pick(null, null, null, i).reshape(120);
        //console.log(features);
        knnClassifier.addExample(features.tolist(),7);
        var features2 = train9.pick(null, null, null, i).reshape(120);
        //console.log(features2);
        knnClassifier.addExample(features2.tolist(),9);
//      //console.log(features);
//      features = train1.pick(null,null,null,i).reshape(1,120);
//      knnClassifier.addExample(features.tolist(),1);
//      //console.log(features);
  }
}

function Test(){
      var currentFeatures =  test.pick(null,null,null,testingSampleIndex).reshape(1,120);
      knnClassifier.classify(currentFeatures.tolist(),GotResults);
      //var currentFeatures2 =  train7.pick(null,null,null,testingSampleIndex).reshape(1,120);
      //knnClassifier.classify(currentFeatures2.tolist(),GotResults);
      
}
function GotResults(err, result){
    //console.log(testingSampleIndex);
      predictedClassLabels.set(testingSampleIndex, parseInt(result.label));
      console.log(testingSampleIndex + ": " + predictedClassLabels.get(testingSampleIndex));
      testingSampleIndex += 1;
      if (testingSampleIndex >=2){
          testingSampleIndex = 0;
      }
}
function draw(){
    clear();
     if (trainingCompleted === false){
         Train();
         trainingCompleted = true ; 
         
    }
    //Test();
 } 
