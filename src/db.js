export const products = [
  {
    id: 1,
    name: "IceCream",
    cardImage: "../images/ice-cream.svg",
    price: 10,
    flavors: [
      {
        name: "prune",
        color: "rgb(90, 24, 142)",
        imageUrl: "../images/ice-cream-prune.svg",
      },
      {
        name: "squash",
        color: "rgb(248, 133, 50)",
        imageUrl: "../images/ice-cream-squash.svg",
      },
      {
        name: "cherry",
        color: "rgb(233, 30, 99)",
        imageUrl: "../images/ice-cream-cherry.svg",
      },
    ],
    sizes: [
      { size: "SMALL", price: 5 },
      { size: "MEDIUM", price: 7 },
      { size: "LARGE", price: 10 },
    ],
  },
  {
    id: 2,
    name: "Popsicle",
    cardImage: "../images/popsicle.svg",
    price: 8,
    flavors: [
      {
        name: "lime",
        color: "rgb(0, 202, 202)",
        imageUrl: "../images/popsicle-lime.svg",
      },
      {
        name: "lettuce",
        color: "rgb(128, 220, 11)",
        imageUrl: "../images/popsicle-lettuce.svg",
      },
      {
        name: "cherry",
        color: "rgb(233, 30, 99)",
        imageUrl: "../images/popsicle-cherry.svg",
      },
    ],
    sizes: [
      { size: "SMALL", price: 4 },
      { size: "LARGE", price: 8 },
    ],
  },
];
