function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  if (local.length <= 2) {
    return local + domain;
  }
  const masked = local[0] + "*".repeat(local.length - 2) + local[local.length - 1];
  return masked + domain;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));
