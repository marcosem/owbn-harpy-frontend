import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
    180deg,
    ${colors.darkSlateGray} 0%,
    ${colors.lightSlateGray} 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;

  strong {
    padding: 30px;
    color: ${colors.light};
    font-family: Great Vibes, Roboto;
    font-size: 40px;
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
      background: rgba(28, 35, 33, 0.5);
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
      color: ${colors.bulgarianRose};
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
