import styled from "styled-components";

export const Container = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;

  //large device css
  .tr-grid-sm-container {
    display: none;
  }
  .tr-grid-lg-container {
    display: grid;
    grid-template-columns: 3fr 4fr 2fr;
    gap: 10px;
    border: 2px solid black;
    margin-bottom: 20px;
    width: 100%;
  }
  .tr-data-id {
    padding: 5px;
  }
  .tr-data-img {
    margin-top: 20px;
  }
  .desc-line {
    font-size: 1em;
    padding: 5px;
    font-weight: normal;
  }
  .tr-rating-val {
    font-size: 5rem;
    text-align: center;
    margin: 10px;
  }
  .tr-rating-icon {
    text-align: center;
    margin: 10px;
  }
  .tr-rating-text {
    text-align: center;
    font-size: 2rem;
    margin: 10px;
  }
  .tr-product-text {
    position: relative;
    padding-left: 40px;
    padding-top: 4px;
    width: 100%;
    font-size: 1.5rem;
  }
  .tr-product-text:before {
    background: url("https://assets.khojdeal.com/cdn/uploads/2021/03/22122103/amazon.png");
    height: 30px;
    width: 32px;
    content: "";
    left: 0px;
    position: absolute;
    border-radius: 3px;
    top: 3px;
    background-position: center;
    background-size: contain;
  }
  .trp-title {
    font-size: 1.25rem;
    line-height: 1.7rem;
  }
  .tr-product-link {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .tr-product-btn {
    background: linear-gradient(to bottom, #fde052, #fcb131);
    padding: 0.5rem 2rem;
    height: auto;
    color: #04307c;
    font-weight: bold;
    font-size: 1.5rem;
    width: 100%;
    border-radius: 50px;
    margin-top: 1rem;
  }
  .tr-product-review {
    padding: 20px;
  }
  .trf-row {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
  .trf-col1 {
    text-align: center;
    padding-top: 25px;
    padding-left: 20px;
  }
  .tr-img-fluid {
    width: 100%;
    min-width: 100px;
    height: 320px;
    bottom: 0;
  }
  .tr-pl-10 {
    padding-left: 10px;
  }
  .tr-pr-30{
    padding-right:30px;
  }
  ul {
    list-style-type: none;
  }
  .tick li::before {
    content: "";
    background-image: url("https://www.khojdeal.com/sales/assets/check.png");
    background-size: 20px 20px;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .tr-title {
    font-size: 2rem;
    font-weight: normal;
  }
  //small device only
  @media only screen and (max-width: 768px) {
    padding-left: 0vw;
    padding-right: 0vw;
    .trp-title {
      margin: 10px;
    }
    .tr-grid-lg-container {
      display: none;
    }
    .tr-grid-sm-container {
      display: grid;
      grid-template-columns: auto auto;
      gap: 1px;
      width: 100%;
    }
    .tr-rating-val {
      font-size: 3.5rem;
      text-align: center;
      margin: 10px;
    }
    .tr-data-id {
      text-align: center;
    }
    .tr-product-btn {
      background: linear-gradient(to bottom, #fde052, #fcb131);
      padding: 0.2rem 1rem;
      height: auto;
      color: #04307c;
      font-weight: bold;
      font-size: 1.5rem;
      width: 100%;
      border-radius: 50px;
      margin-top: 1rem;
    }
  }
`;

export const Small = styled.div`
  background-color: #fff;
  margin: 10px;
  @media only screen and (max-width: 768px) {
    border: 2px solid black;
  }
`;
