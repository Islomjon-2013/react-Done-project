import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 800px;
  height: 400px;
  border-radius: 40px;

  margin: 50px auto;
  padding: 100px;
  box-shadow: 4px 4px 16px 10px green;

  button {
    max-width: 300px;
    height: 40px;
    border-radius: 100px;
    color: white;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: red;
    border: 3px solid green;
  }
  input {
    border: 3px solid green;
    width: 70%;
    height: 40px;
    margin: 0 auto;
    color: black;
    font-size: 20px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    color: red;
  }
`;
