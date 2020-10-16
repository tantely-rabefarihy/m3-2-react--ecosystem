import React from "react";
import { items, sellers } from "../data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// styled components ********

const ItemContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 800px;
  margin: auto;
`;

const ItemDetailsContainer = styled.div`
  padding-left: 20px;
  & h2 {
    font-family: "Arial Black", Gadget, sans-serif;
  }
`;

const FruitImg = styled.img`
  width: 300px;
  margin-top: 26px;
  border-radius: 14px;
`;

const SellerContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SellerAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 16px;
  width: 200px;
  background-color: #4c30ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #8c4183;
  }
`;

const DetailText = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
`;

const SellerInfo = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: bolder;
`;

const Stock = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: bolder;
  color: #6e6e6e;
`;

const LatinName = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  font-style: italic;
  color: grey;
`;

// ***************

const ItemDetails = () => {
  const { itemId } = useParams();
  let fruit = items[itemId];
  let seller = sellers[fruit.sellerId];
  let inStock = fruit.quantity > 0;

  let stockStatus = !inStock ? (
    "Out of Stock"
  ) : (
    <Button>${fruit.price} - Buy Now</Button>
  );

  return (
    <ItemContainer>
      <div>
        <FruitImg src={fruit.imageSrc}></FruitImg>
      </div>
      <ItemDetailsContainer>
        <h2>{fruit.name}</h2>
        <LatinName>{fruit.latinName}</LatinName>
        <DetailText>{fruit.description}</DetailText>
        <p>
          Product of <em>{fruit.countryOfOrigin}</em>
        </p>
        <Stock>{stockStatus}</Stock>
        <SellerContainer>
          <div>
            <SellerAvatar src={seller.avatarSrc}></SellerAvatar>
          </div>
          <div>
            <p>
              Sold by: <SellerInfo>{seller.storeName}</SellerInfo>
            </p>
          </div>
        </SellerContainer>
      </ItemDetailsContainer>
    </ItemContainer>
  );
};

export default ItemDetails;
