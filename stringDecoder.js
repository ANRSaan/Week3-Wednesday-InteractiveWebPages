const decoder = code => {
    let decoded = ""
    for (i = 0; i < code.length; i++) {
      number = +code[i]
      if (number !== NaN) {
        i += number +1
        decoded += code[i]
      }
    }
    return decoded
  }
  code = "0h2xce5ngbrdy"
  console.log(decoder(code))