// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
	  // Example: resolve with a string after a delay
    setTimeout(() => {
      resolve('Response from API');
    }, 1000);
  });
}
