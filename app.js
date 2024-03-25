// SBA 308: JavaScript Fundamentals


// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50,
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150,
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500,
      },
    ],
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47,
      },
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150,
      },
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400,
      },
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39,
      },
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140,
      },
    },
  ];


  //Write a function to output an Array of Objects as follows:
  /*[
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ]; */
  

  function getLearnerData(CI, AG, LS) {   //function to get the learner data

    const result = []; //empty array to store the results
    let avg = 0;
    let _1 = 0;
    let _2 = 0;
    let id = 0;
    for (let i = 0; i < LS.length; i++) {  //loop through the submissions
      id = LS[i].learner_id;
      avg = (LS[i].submission.score / AG.assignments[LS[i].assignment_id - 1].points_possible) * AG.group_weight;
    //    avg =(LS[i].submission.score + LS[i].submission.score) / (AG.assignments[i].points_possible + AG.assignments[i].points_possible); // from other   
      _1 = (LS[i].submission.score) / (AG.assignments[LS[i].assignment_id - 1].points_possible);
      _2 = ((LS[i].submission.score - 15)/ (AG.assignments[LS[i].assignment_id - 1].points_possible));
      result[id - 1] = result[id - 1] || 
      {
        id: id,
        avg: avg, 
        1: _1,
        2: _2
      };
      }

    

    result.sort((a, b) => a.id - b.id);


    try {
        result[learner - 1][assignment] = total;
      } catch (error) {
        // result[learner - 1][assignment] = 0;
      }
    

      return result;
    

  }

  const finalResult = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(finalResult);  









//Testing:
//  /*{
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0, // 150 / 150
//   }*/

//   console.log(LearnerSubmissions[0].submission.score); // 47

//   console.log(AssignmentGroup.assignments[0].points_possible); // 50

//   //       1: 0.94, // 47 / 50 
// console.log((LearnerSubmissions[0].submission.score)/(AssignmentGroup.assignments[0].points_possible));

// console.log(AssignmentGroup.assignments[1].points_possible);   //150
// //2: 1.0, // 150 / 150
// console.log((AssignmentGroup.assignments[1].points_possible)/(AssignmentGroup.assignments[1].points_possible));   //150/150

//     avg: 0.985, // (47 + 150) / (50 + 150)
// console.log((LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible));
