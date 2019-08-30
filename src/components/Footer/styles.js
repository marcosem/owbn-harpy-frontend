import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background: rgba(238, 229, 233, 0.6);
  width: 80%;
  height: 120px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  span {
    font-family: Roboto, 'Helvetica Neue', sans-serif;
    font-size: 13px;
    color: #333;

    a {
      color: #222;
      font-weight: bold;
    }
  }
`;
