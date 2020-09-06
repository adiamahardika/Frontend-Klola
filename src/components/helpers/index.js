export function parseToRupiah(number) {
  var rupiah = "";
  var numberrev = number.toString().split("").reverse().join("");
  for (var i = 0; i < numberrev.length; i++)
    if (i % 3 === 0) rupiah += numberrev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
}
export function parseDate(time) {
  let date = new Date(time);
  return (
    ("0" + date.getDate()).slice(-2) +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear() +
    ", " +
    ("0" + date.getHours()).slice(-2) +
    "." +
    ("0" + date.getMinutes()).slice(-2) +
    " WIB"
  );
}
