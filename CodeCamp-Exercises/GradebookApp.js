
//Average an array of numbers
function getAverage(scores) {
  let sum = 0;
  for(const score of scores)
  {
    sum += score;
  }
  sum = sum / scores.length
  return sum;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//Associate a grade to a number, exercising adjacent intervals
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } 
  else if (score >= 90) {
    return "A";
  } 
  else if (score >= 80) {
    return "B";
  } 
  else if (score >= 70) {
    return "C";
  } 
  else if (score >= 60) {
    return "D";
  } 
  else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//Create a messagge based on the student's grade, the class average a nd the completion
//Of the course. The message is constructed through concatenation in several steps.
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

console.log(hasPassingGrade(96));
console.log(hasPassingGrade(82));
console.log(hasPassingGrade(56));

function studentMsg(totalScores, studentScore) {
  let message = "Class average: ";

  message += getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) + ". ";

  if(hasPassingGrade(studentScore))
  {
    message += "You passed the course.";
  }
  else
  {
    message += "You failed the course.";
  }

  return message;
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));