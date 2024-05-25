let data = [
  "00111101001100000",
  "01101100000001001",
  "00000000001001001",
  "00001011000101001",
  "00101101000000000",
  "00101100001010001",
  "00101000000010001",
  "00000000001110010",
  "00100100001111000",
  "00001101000001011",
  "00111101010000010",
  "01010101010000010",
  "01111000010000000",
  "01101000010011100",
  "00101100000000000",
  "01101100001101001",
  "00001100001100001",
  "00101101000000100",
  "11010100101101001",
  "00100101000000000",
  "00000001001100101",
  "00100000000000000",
  "01101110001101001",
  "01011000011101001",
  "01101000111101001",
  "01101100011100001",
  "01111101010000000",
  "01101100010100000",
  "01110100010001110",
  "00010001010001011",
  "00101001000000011",
  "00000100000000001",
  "01000000000010010",
  "01110101000001000",
  "00100101011100000",
  "01001101010100010",
  "01100100010000100",
  "01101101010001000"
]

let scores = [
  66.67,
  66.67,
  0.00,
  66.67,
  100.00,
  33.33,
  33.33,
  33.33,
  33.33,
  66.67,
  0.00,
  66.67,
  100.00,
  66.67,
  100.00,
  33.33,
  33.33,
  100.00,
  0.00,
  100.00,
  33.33,
  100.00,
  33.33,
  33.33,
  33.33,
  66.67,
  100.00,
  66.67,
  33.33,
  33.33,
  33.33,
  33.33,
  33.33,
  100.00,
  66.67,
  66.67,
  66.67,
  100.00,
]

scores.forEach((s, i) => {
  scores[i] = s / 100

})

function stringToArray(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    arr.push(Number(s.slice(i, i + 1)))
  }
  return arr
}

data.forEach((e, i) => {
  data[i] = stringToArray(e)
})



// Function to calculate the mean of an array
function mean(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}

// Function to calculate the slope (beta1) for multiple features
function slopes(X, y, meansX, meanY) {
  const beta1 = [];
  for (let j = 0; j < X[0].length; j++) {
    let numerator = 0;
    let denominator = 0;
    for (let i = 0; i < X.length; i++) {
      numerator += (X[i][j] - meansX[j]) * (y[i] - meanY);
      denominator += Math.pow(X[i][j] - meansX[j], 2);
    }
    beta1.push(numerator / denominator);
  }
  return beta1;
}

// Function to calculate the intercept (beta0)
function intercept(meanY, beta1, meansX) {
  let sum = 0;
  for (let j = 0; j < beta1.length; j++) {
    sum += beta1[j] * meansX[j];
  }
  return meanY - sum;
}

// Linear regression algorithm for multiple features
function linearRegression(X, y) {
  const meansX = [];
  for (let j = 0; j < X[0].length; j++) {
    meansX.push(mean(X.map(row => row[j])));
  }
  const meanY = mean(y);

  const beta1 = slopes(X, y, meansX, meanY);
  const beta0 = intercept(meanY, beta1, meansX);

  return { beta0, beta1 };
}

// Example training data
const X_train = data

const y_train = scores

// Train the linear regression model
const { beta0, beta1 } = linearRegression(X_train, y_train);

console.log("beta1", beta1)
console.log("beta0", beta0)

// Test data
const X_test = data

// Make predictions
const predictions = X_test.map(x => {
  let sum = beta0;
  for (let j = 0; j < beta1.length; j++) {
    sum += beta1[j] * x[j];
  }

  return sum;

});

// Output predictions
console.log("Predicted outputs:");
for (let i = 0; i < X_test.length; i++) {
  console.log(`Input: ${X_test[i]}, Predicted Output: ${predictions[i]} Actual: ${scores[i]}`);
}

let sumDif = 0

scores.forEach((s, i) => {
  sumDif += Math.abs(s - predictions[i])
})

console.log("Average Error: " + sumDif / scores.length)