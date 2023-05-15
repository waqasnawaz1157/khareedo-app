import ProductImg1 from "../images/product-1.png";
import ProductImg2 from "../images/product-2.png";
import ProductImg3 from "../images/product-3.png";
import ProductImg4 from "../images/product-4.png";
import ProductImg5 from "../images/product-5.png";
import ProductImg6 from "../images/product-6.png";
import ProductImg7 from "../images/product-7.png";
import ProductImg8 from "../images/product-8.png";

export const category = [
  { id: 1, name: "Shoes" },
  { id: 2, name: "Dress" },
  { id: 3, name: "Scarf" },
  { id: 4, name: "Glasses" },
  { id: 5, name: "Bag" },
  { id: 6, name: "T-Shirts" },
];

export const products = [
  {
    id: 1,
    title: "Yellow Reserved Hoodie",
    img: ProductImg1,
    price: "$155.00",
    category: 2,
    rating: 9,
  },
  {
    id: 2,
    title: "Nike Repel Miler",
    img: ProductImg2,
    price: "$120.50",
    category: 2,
    rating: 7,
  },
  {
    id: 3,
    title: "Nike Sportswear Futura Luxe",
    img: ProductImg3,
    price: "$160.00",
    category: 4,
    rating: 8,
  },
  {
    id: 4,
    title: "Adicolor Classics Joggers",
    img: ProductImg4,
    price: "$63.85",
    category: 1,
    rating: 7,
  },
  {
    id: 5,
    title: "Nike Sportswear Futura Luxe",
    img: ProductImg5,
    price: "$130.00",
    category: 5,
    rating: 5,
  },
  {
    id: 6,
    title: "Geometric Print Scarf",
    img: ProductImg6,
    price: "$53.00",
    category: 3,
    rating: 6,
  },
  {
    id: 7,
    title: "Nike Air Zoom Pegasus",
    img: ProductImg7,
    price: "$198.00",
    category: 1,
    rating: 9,
  },
  {
    id: 8,
    title: "Basic Dress Green",
    img: ProductImg8,
    price: "$236.00",
    category: 2,
    rating: 7,
  },
];

export const sortProductDescByRating = (numberOfProducts = 8) => {
  const prods = products.sort((a, b) => b.rating - a.rating);
  return prods.slice(0, numberOfProducts);
};

const appendCategoryNames = (bestSeller) => {
  return bestSeller.map((item) => {
    const cat = category.find((cat) => cat.id === item.category);
    return { ...item, category: cat.name };
  });
};

export const getBestSeller = () => {
  const bestSeller = sortProductDescByRating();
  return appendCategoryNames(bestSeller);
};

export const getBestSellerByCategoryId = (id) => {
  const bestSeller = sortProductDescByRating();
  const prods = bestSeller.filter((item) => item.category === id);
  return appendCategoryNames(prods);
};
