
// Sample array of objects
const characters = [
    { name: 'Luke Skywalker', height: 172 },
    { name: 'Darth Vader', height: 202 },
    { name: 'Yoda', height: 66 },
    { name: 'Obi-Wan Kenobi', height: 182 },
  ];
  
  // Function to sort by a specific property
  const sortByProperty = (arr, prop) => {
    if (typeof arr[0][prop] === 'string') {
      return arr.sort((a, b) => a[prop].localeCompare(b[prop]));
    } else {
      return arr.sort((a, b) => a[prop] - b[prop]);
    }
  };
  
  // Sort by height
  console.log(sortByProperty(characters, 'height'));
  
  // Sort by name
  console.log(sortByProperty(characters, 'name'));
  
  




// String.prototype.mySplit = function(separator) {
//     // Default separator to comma if not provided
//     separator = separator || ',';

//     let result = [];
//     let startIndex = 0;
//     let separatorLength = separator.length;

//     for (let i = 0; i < this.length; i++) {
//         if (this.substr(i, separatorLength) === separator) {
//             // Extract substring and push to result array
//             result.push(this.substring(startIndex, i));
//             startIndex = i + separatorLength;
//             i += separatorLength - 1; // Skip over the separator
//         }
//     }

//     // Push remaining substring
//     result.push(this.substring(startIndex));

//     return result;
// };

// // Test the custom split method
// let str = 'Hello,World, From,ChatGPT';
// console.log(str.mySplit(' ')); // Output: ["Hello", "World", "From
