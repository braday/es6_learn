const scores = [1, 34, 45, 123, 56, 23, 12, 11, 65, 29];

const costs = [.12, .23, .34, .56, .12, .45, .65, .54, .76, .98];

const highScore = 0;
const output ='';

function getHigherScore(scores){
  for(let i = 0; i < scores.length; i++) {
    output = "Bubble solution#:" + i  + " score: " + scores[i];

    console.log(output);
    if (scores[i] > highScore){
      highScore = scores[i];
    }
  }
  return highScore;
}


// function getLowerCost(score, costs, highScore) {
//   let cost = 100;
//   let index;

//   for (let i = 0; i < scores.length; i++) {
//     if(scores[i]) == highscore{
      
//     }
//   }
// }