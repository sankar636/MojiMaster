import lesson1 from "./lesson1.js";
import lesson2 from "./lesson2.js";
import lesson3 from "./lesson3.js";
import lesson4 from "./lesson4.js";
import lesson5 from "./lesson5.js";
import lesson6 from "./lesson6.js";
import lesson7 from "./lesson7.js";
import lesson8 from "./lesson8.js";
import lesson9 from "./lesson9.js";
import lesson10 from "./lesson10.js";

// Flat list of every vocabulary item across all lessons currently available.
// To add a new lesson: create src/data/vocabulary/lessonN.js exporting an
// array in the same shape, then import + append it here.
export const vocabularyData = [
  ...lesson1,
  ...lesson2,
  ...lesson3,
  ...lesson4,
  ...lesson5,
  ...lesson6,
  ...lesson7,
  ...lesson8,
  ...lesson9,
  ...lesson10,
];

// The highest lesson number that currently has real vocabulary data.
// The lesson-range UI can still offer choices beyond this (per the spec,
// up to Lesson 25), but selecting lessons beyond this number will simply
// return no items until that lesson's data file is added.
export const MAX_AVAILABLE_VOCAB_LESSON = 10;

export default vocabularyData;
