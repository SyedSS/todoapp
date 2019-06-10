import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "../Actions/index";

let initialData = [
  {
    title: "Meditation",
    content:
      "There are thousands of studies that have shown mindfulness meditation can positively impact mental and physical health. Whether it’s by reducing stress, improving sleep, increasing focus, or improving relationships, research shows mindfulness works. While the research on mindfulness, especially digital mindfulness programs, is still growing, there is evidence to support the use of mindfulness training for many outcomes.",
    id: 0
  },
  {
    title: "The Slow-Carb Diet",
    content:
      "The ease of this diet is built on the minimum effective dose (MED) principle. This concept is defined as the smallest dose that will produce the desired outcome.",
    id: 1
  }
];

function compareValues(key, order = "asc") {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

const reducer = (notes = initialData, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return notes.concat(action.payload);
    case DELETE_NOTE:
      return notes.filter(notes => notes.id !== action.id);
    case EDIT_NOTE:
      notes.splice(action.id.id, 1);
      return notes.concat(action.id).sort(compareValues("id", "asc"));
    default:
      return notes;
  }
};

export default reducer;
