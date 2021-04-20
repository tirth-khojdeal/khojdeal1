import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  .tr-footer {
    display: flex;
    justify-content: space-around;
  }
  .trf-desc{
   text-align:center;
  }
   .trf-space {
    text-align: center;
    background: linear-gradient(to bottom, #fde052, #fcb131);
    padding: 15px 60px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .trf-link {
    text-decoration: none;
    color: #04307c;
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    .tr-footer {
      display: flex;
      flex-flow: column;
    }
    .trf-space {
      padding: 5px 0px;
    }
    .trf-link-text {
      text-decoration: none;
      text-align: center;
      color: #04307c;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;
