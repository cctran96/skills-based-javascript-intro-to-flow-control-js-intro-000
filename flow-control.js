function ternaryTeenager(age) {
  return (age > 12 && age < 20) ? "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case (age > 12 && age < 20):
      return "You are a teenager"
    default:
      return "You are not a teenager"
  }
}