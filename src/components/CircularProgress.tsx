import React from 'react';
import { styled } from 'twin.macro';

export const CircularProgress: React.FC = () => {
  return (
    <Wrapper>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 4px;
    border: 4px solid #486dd3;
    border-radius: 50%;
    animation: lds-ring 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #486dd3 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
