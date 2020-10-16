import React from "react";
import { items } from "../data";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 180px 180px 180px;
  grid-template-rows: 180px 180px;
  grid-gap: 20px;
  justify-content: center;
  position: relative;

  .item {
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: -1px 2px 43px 12px rgba(235, 235, 235, 1);
    width: 150px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }

  img {
    width: 100px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .itemName {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bolder;
    margin: 0;
  }

  .latinName {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }
`;

const LinkStyle = styled(Link)`
  &:link {
    text-decoration: none;
  }
`;
const ListingGrid = (props) => {
  console.log(props.itemList);
  return (
    <ItemContainer>
      {props.itemList.map((item) => {
        return (
          <LinkStyle to={`/items/${item.id}`} key={item.id}>
            <div className="item">
              <img src={item.imageSrc}></img>
              <p className="itemName">{item.name}</p>
              <p className="latinName">{item.latinName}</p>
            </div>
          </LinkStyle>
        );
      })}
    </ItemContainer>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;
