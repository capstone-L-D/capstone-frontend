export const Option = {
    optionId: '',
    text: '',
    isCorrect: false,
  };
  
  export const Question = {
    questionId: '',
    text: '',
    type: '',
    points: 0,
    options: [],
  };
  
  export const Assessment = {
    _id: '',
    title: '',
    totalScore: 0,
    passScore: 0,
    timeLimit: 0,
    questions: [],
  };
  
  export const SelectedAnswer = {
    questionId: '',
    selectedOption: Option,
  };
  