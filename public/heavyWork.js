self.onmessage = function (event) {
  const messageFromMainScript = event.data;
  console.log("Received message from main script:", messageFromMainScript);
  const result = doMath(messageFromMainScript);
  self.postMessage(result);
};

function doMath(num) {
  let result = 0;
  for (let i = 0; i < 5000000000; i++) {
    result += i;
  }
  return num * num;
}
