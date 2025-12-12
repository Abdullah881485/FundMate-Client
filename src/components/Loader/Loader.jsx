import React from "react";
import styled from "styled-components";

const Loader1 = () => {
  return (
    <StyledWrapper>
      <div className="loader my-50" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .loader {
    width: 48px;
    height: 48px;
    position: relative;
  }

  .loader:before {
    content: "";
    width: 48px;
    height: 6px;
    background: rgba(42, 104, 119, 0.35);
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: shadowAnim 0.5s linear infinite;
  }

  .loader:after {
    content: "";
    width: 100%;
    height: 100%;
    background: #2a6877;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 40px;
    animation: boxJump 0.5s linear infinite;
  }

  @keyframes boxJump {
    15% {
      border-bottom-right-radius: 10px;
    }

    25% {
      transform: translateY(12px) rotate(20deg);
    }

    50% {
      transform: translateY(15px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }

    75% {
      transform: translateY(5px) rotate(55deg);
    }

    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadowAnim {
    0%,
    100% {
      transform: scale(1.7, 1);
    }

    50% {
      transform: scale(1.9, 1);
    }
  }
`;

export default Loader1;
