import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  const { image, id, title, price } = item
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <img src={image} height="300px" width={"200px"} />
        <h3>{title}</h3>
        <h4>Price :{price}</h4>
      </Flex>
    </>
  );
};