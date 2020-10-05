var trainingCompleted = false;
var numSamples = 2;
var testingSampleIndex = 0;
var predictedClassLabels = nj.zeros(2);
const knnClassifier = ml5.KNNClassifier();

function Train(){
    trainingCompleted = true;
//  console.log(train0);
//  console.log(test);
  for (var i = 0; i < train0.shape[3]; i++) {
      //console.log(train0.pick(null, null, null, i).toString());
      var features = train0.pick(null, null, null, i).reshape(1,120);
      console.log(features);
      knnClassifier.addExample(features.tolist(),0);
  }
}
function Test(){
    var currentFeatures =  test.pick(null,null,null,testingSampleIndex).reshape(1,120);
    var predictedLabel = knnClassifier.classify(currentFeatures.tolist());
    knnClassifier.classify(currentFeatures.tolist(),GotResults);
}
function GotResults(err, result){
    predictedClassLabels.set(testingSampleIndex, parseInt(result.label));
    testingSampleIndex += 1;
    console.log(testingSampleIndex + ": " + predictedClassLabels.get(testingSampleIndex))
    if (testingSampleIndex > 1){
        testingSampleIndex = 0;
    }
    
}
function draw(){
    clear();
     if (trainingCompleted === false){
         Train();
         trainingCompleted = true ; 
         
    }
    Test();
 } 
