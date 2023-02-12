let userDelivery = prompt(
  "Введите страну, в которую Вы хотите оформить доставку."
);

const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

switch (userDelivery.toLowerCase()) {
  case "китай":
    alert(`доставка стоит ${china} $`);
    break;

  case "чили":
    alert(`доставка стоит ${chili} $`);
    break;
  case "австралия":
    alert(`доставка стоит ${australia} $`);
    break;
  case "индия":
    alert(`доставка стоит ${india} $`);
    break;
  case "ямайка":
    alert(`доставка стоит ${jamaica} $`);
    break;

  default:
    alert("error country");
    break;
}
