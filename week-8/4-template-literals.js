function templateLiteral(name, age) {
  const text = `Hello ${name}, in 10 years time you will be ${age}`; //template literal
  return text;
}

// Expected output: "Hello Sanyia, in 10 years time you will be 36"
console.log(templateLiteral("Sanyia", "36"));
