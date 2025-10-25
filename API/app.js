// const myPromise = new Promise((resolve,reject)=>{

//     let success = true

//     if(success){
//         resolve("Operation SuccessFull")
//     } else{
//         reject("Operation rejected")
//     }
// });

// myPromise.then((result)=>{console.log(result);
// }).catch((error)=>{console.log(error);
// })


// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched!");
//     }, 2000);
//   });
// };

// fetchData()
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


// async function getData() {
//   return "Hello"
// }

// async function getPost() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();  // Wait for the JSON to be parsed
//     console.log(data);  // Display the data
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// getPost()