document.getElementById("grade-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the input values
    const assignment1 = parseFloat(document.getElementById("assignment1").value);
    const assignment2 = parseFloat(document.getElementById("assignment2").value);
    const finalExam = parseFloat(document.getElementById("finalExam").value);
  
    // Calculate the average grade
    const total = assignment1 + assignment2 + finalExam;
    const average = total / 3;
  
    // Determine the letter grade
    let letterGrade;
    if (average >= 50) {
      letterGrade = "A";
    } else if (average >= 40) {
      letterGrade = "B";
    } else if (average >= 30) {
      letterGrade = "C";
    } else if (average >= 20) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
  
    // Display the results
    document.getElementById("finalGrade").textContent = average.toFixed(2);
    document.getElementById("letterGrade").textContent = letterGrade;
  });
  
