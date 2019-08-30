// Loading Component created by Marcio: https://github.com/marciofrancalima/meetappweb
import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubButton = styled.button.attrs(props => ({
  disabled: props.loading || props.disabled,
}))`
  margin: 5px 0 0;
  height: 44px;
  color: #ccc;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;

  ${props =>
    props.red
      ? css`
          background: #440d0f;
        `
      : css`
          background: #5a9367;
        `}

  div {
    display: flex;
    margin: 0 7px;
    padding: 0 7px;

    span {
      font-size: 16px;
      color: #ccc;
      margin-left: 6px;
      padding-left: 6px;
    }
  }

  &:hover {
    ${props =>
      props.red
        ? css`
            background: ${darken(0.08, '#440d0f')};
          `
        : css`
            background: ${darken(0.08, '#5a9367')};
          `}
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
