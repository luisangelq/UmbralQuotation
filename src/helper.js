//year difference
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

//calculate according to brand
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "american":
      increment = 1.15;
      break;
    case "europe":
      increment = 1.3;
      break;
    case "asian":
      increment = 1.05;
      break;

    default:
      break;
  }
  return increment;
}

//calculate plan

export function calculatePlan(plan) {
  return (plan === "basic") ? 1.20 : 1.50;
}