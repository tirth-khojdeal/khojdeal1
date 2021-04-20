import styled from "styled-components";

export const Container = styled.div`
  background-color: purple;
  color: white;
  margin-top: 80px;
  padding-left: 5%;
  padding-bottom: 5px;
  .trt-title {
    font-size: 2.6rem;
  }
  .trt-subtitle {
    font-size:1.6rem;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 5px;
  }
  @media only screen and (max-width: 768px) {
    .trt-title {
      font-size: 1.2rem;
    }
    .trt-subtitle {
      font-size: 1.0rem;
      line-height: 1.25;
      margin-bottom: 5px;
    }
  }
`;
