const credits = 10;
const pricePerDroid = 2;

const howManyUnits = prompt("?");

if (howManyUnits === null) {
  console.log("canceled");
} else {
  const totalPrice = howManyUnits * pricePerDroid;
  if (totalPrice > credits) {
    console.log("not ok");
  } else {
    console.log(
      `you bought ${howManyUnits} drones, you still have ${
        credits - totalPrice
      } money`
    );
  }
}
