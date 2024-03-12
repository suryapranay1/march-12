/*we can destructure the json object by just replacing the square braces with curly braces*/

const person = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  // Destructuring the 'person' object
  const { name, age, city } = person;
  
  console.log(name); // Output: John
  console.log(age); // Output: 30
  console.log(city); // Output: New York