import React, { useState, useEffect } from "react";
import { category, getBestSeller, getBestSellerByCategoryId } from "../../data";
import Row from "../../common/Row";
import Container from "../../common/Container";

const ProductCard = ({ data }) => {
  return (
    <div className="w-[23%] mx-[10px] mb-[30px] shadow-md hover:shadow-xl transition">
      <img
        src={data.img}
        className="w-[100%] h-[350px] object-cover"
        alt="Product"
      />
      <h3 className="text-[#000] text-[14px] font-semibold text-center mt-2">
        {data.title}
      </h3>
      <div className="flex items-center justify-between p-[10px]">
        <p>{data.category}</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
};

// FilterSection
const FilterSection = () => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCat] = useState(-1);

  useEffect(() => {
    setCategories(category);
    const bestSeller = getBestSeller();
    setProducts(bestSeller);
  }, []);

  const handleCategoryClick = (id) => {
    const prods = id === -1 ? getBestSeller() : getBestSellerByCategoryId(id);
    setSelectedCat(id);
    setProducts(prods);
  };

  const getCategoryClasses = (id) => {
    return `mr-[20px] ${
      selectedCategory === id ? "font-medium text-black" : "text-[#00000080]"
    } hover:text-black`;
  };

  return (
    <>
      <Row className={`py-[25px]`}>
        <Container>
          <h1 className="text-center text-[50px] text-black font-medium mb-[20px]">
            Best Seller Products
          </h1>
          <div className="flex items-center justify-between mb-[40px]">
            <div className="w-[80%] flex items-center justify-start">
              <button
                className={getCategoryClasses(-1)}
                onClick={() => handleCategoryClick(-1)}
              >
                All Products
              </button>
              {categories?.map(({ id, name }) => (
                <button
                  key={id}
                  className={getCategoryClasses(id)}
                  onClick={() => handleCategoryClick(id)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="w-[20%] flex items-center justify-end">
              <button className="bg-[#1E2832] text-[#fff] text-[16px] py-[10px] px-[20px]">
                <i className="fa-solid fa-filter pr-[10px]"></i> Filter
              </button>
            </div>
          </div>
          <div className="w-[100%] flex items-center justify-start flex-wrap">
            {products?.length > 0 ? (
              products?.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))
            ) : (
              <div className="w-full h-[200px] flex items-center justify-center">
                <p className="text-[#666666] text-[24px]">No product found.</p>
              </div>
            )}
          </div>
        </Container>
      </Row>
    </>
  );
};

export default FilterSection;
