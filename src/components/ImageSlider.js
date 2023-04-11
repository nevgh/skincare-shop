// import React, { useState } from "react";

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const sliderStyles = {
//     height: "100%",
//     position: "relative",
//   };

//   const slideStyles = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "10px",
//     backgroundSize: "cover",
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   const leftArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     left: "32px",
//     fontSize: "45px",
//     color: "black",
//     zIndex: 1,
//     cursor: "pointer",
//   };

//   const rightArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     right: "32px",
//     fontSize: "45px",
//     color: "black",
//     zIndex: 1,
//     cursor: "pointer",
//   };

//   const goToPrevious = () => {
//     const isFirstSlise = currentIndex === 0;
//     const newIndex = isFirstSlise ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const dotsContainerStyles = {
//     display: "flex",
//     justifyContent: "center",
//   };

//   const dotStyles = {
//     margin: "0 3px",
//     cursor: "pointer",
//     fontSize: "50px",
//     color: "rgb(237, 225, 207)",
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div style={sliderStyles}>
//       <div style={leftArrowStyles} onClick={goToPrevious}>
//         &#11164;
//       </div>
//       <div style={rightArrowStyles} onClick={goToNext}>
//         &#11166;
//       </div>
//       <div style={slideStyles}></div>
//       <div style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             style={dotStyles}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             <span>&#10242;</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
