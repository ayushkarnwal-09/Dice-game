import React, { useState } from "react";
import "./NumberSelector.css";

const NumberSelector = ({
  setError,
  selectedNumber,
  setSelectedNumber,
  error,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="numberSelectorDiv">
      <p style={{ color: "red" }}>{error}</p>
      <div className="buttonsDiv">
        {arrNumber.map((value, i) => (
          <button
            key={i}
            onClick={() => numberSelectorHandler(value)}
            style={{
              backgroundColor: value === selectedNumber ? "black" : "white",
              color: value !== selectedNumber ? "black" : "white",
            }}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="question_div">
        <p>Select Number</p>
      </div>
    </div>
    // <NumberSelectorContainer>
    //   <FlexContainer>
    //     {arrNumber.map((value, i) => (
    //       <Box
    //         isSelected={value === selectedNumber}
    //         key={i}
    //         onClick={() => setSelectedNumber(value)}
    //       >
    //         {value}
    //       </Box>
    //     ))}
    //   </FlexContainer>
    //   <p>Select Number</p>
    // </NumberSelectorContainer>
  );
};

export default NumberSelector;

// const NumberSelectorContainer = styled.div`
//   p {
//     font-size: 24px;
//     font-weight: 700;
//     margin-top: 20px;
//   }
// `;

// const FlexContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 24px;
//   flex-wrap: wrap;
//   margin-top: 20px;
// `;

// const Box = styled.div`
//   height: 72px;
//   width: 72px;
//   border: 1px solid black;
//   display: grid;
//   place-items: center;
//   font-size: 24px;
//   font-weight: 700;
//   background-color: ${(props) => (props.isSelected ? "black" : "white")};
//   color: ${(props) => (!props.isSelected ? "black" : "white")};
//   cursor: pointer;
//   flex-shrink: 0; /* Prevents shrinking */
// `;
