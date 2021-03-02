function ternaryTeenager(age) {
  return (age > 12 && age < 20) ? "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
  switch(age > 12 && age < 20) {
    case true:
      return "You are a teenager"
    default:
      return "You have an age"
  }
}