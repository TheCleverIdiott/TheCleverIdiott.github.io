const skills = [
  {
    category: ['Fullstack Web Development', 'AI/ML/DL', 'Data Science', 'Graphic Design', 'Photo and Video Editing', 'Python', 'C and C++'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [

];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
