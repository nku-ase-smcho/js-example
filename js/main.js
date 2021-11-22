// hello    
/* What is the font that I'm using? */ 

const person = {
  name: 'John',
  age: 40
}
const you = [person, person]

console.log(person.name)
console.log(you.reduce((prev, cur) => prev + cur.age, 0)) 