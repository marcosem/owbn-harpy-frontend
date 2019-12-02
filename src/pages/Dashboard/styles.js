import styled, { css, keyframes } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-gap: 15px;
  }

  svg {
    display: block;
    margin: auto;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const ListHeader = styled.div`
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;

  strong {
    display: block;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const MembersList = styled.li`
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;

  strong {
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    ${css`
      background: rgba(0, 0, 0, 0.4);
    `}
  }
`;

export const Name = styled.strong`
  width: 200px;
`;

export const Clan = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;

  img {
    height: 20px;
    margin-right: 10px;
  }
`;

export const Position = styled.strong`
  width: 150px;
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 580px;
  padding: 5px 20px;
`;
