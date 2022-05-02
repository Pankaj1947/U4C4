import React, { useEffect } from "react";
import { Select, Grid } from "./Styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductsData } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
export const Products = () => {
  const { isLoading, isError, data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    let action = getProductsData
    action(dispatch)
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((data, index) => {
          return (
            <ProductCard

              key={data.id}
              {...data}

            />
          );
        })}
      </Grid>
    </>
  );
};