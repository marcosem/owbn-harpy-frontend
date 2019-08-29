import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #0a0a0a 0%, #4b0101 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;

  strong {
    padding: 20px;
    color: #a8a8a8;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-top: 30px;
  max-width: 315px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f94d6a;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      align-self: center;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
