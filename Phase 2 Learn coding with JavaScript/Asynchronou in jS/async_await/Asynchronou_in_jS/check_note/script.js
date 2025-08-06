
//         // Simulating a delay using a Promise
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Async function to demonstrate async/await
// async function fetchData() {
//     console.log("Fetching data...");
//     await delay(2000); // Wait for 2 seconds
//     console.log("Data fetched successfully!");
// }

// // Call the async function
// fetchData();
    



async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchData();
