// HTML dynamic color string generation

// Generate a valid randomly generated rgb color string. Assume all of them have 6 digits always.

// Valid Output
// #ffffff
// #25a403
// #000001

// --------------------------
// Non-Valid Output
// #fff
// #aaa
// #zzzzz
// cafebabe
// #a567567676576756A7

const generateColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
