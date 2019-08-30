import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${darken(0.1, colors.darkSlateGray)};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    padding-top: 10px;

    strong {
      position: absolute;

      bottom: 1;
      padding-top: 5px;
      padding-left: 20px;
      color: ${colors.light};
      font-family: Great Vibes, Roboto;
      font-size: 30px;
      font-weight: 50;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

// border-left: 1px solid #eee;
export const Profile = styled.div`
  display: flex;
  margin-right: 10px;
  padding-right: 10px;

  div {
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    margin-left: 20px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const LogoutButton = styled.button.attrs({
  type: 'button',
})`
  width: 71px;
  height: 38px;
  background: #440d0f;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#440d0f')};
  }
`;
