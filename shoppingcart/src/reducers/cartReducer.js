let cartReducer = (state, action) => {
  //check if state exists
  if (state === undefined) {
    state = {
      totalCost: 0,
      productCart: [
        {
          productName: "Apple",
          productPrice: 3,
        },
      ],
    };
  }
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        totalCost: state.totalCost + parseInt(action.productData.productPrice),
        productCart: state.productCart.concat(action.productData),
      };

    case "deleteProduct":
      //[{productName - oranges, productPrice}, {productName - apples, productPrice}, {productName - bananas, productPrice}]
      let updatedArray = state.productCart.filter((productObj) => {
        return productObj.productName != action.productData.productName;
        //testing to remove bananas ------------------------bananas
        //banana object doesn't get put back into the array
      });

      return {
        ...state,
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
        productCart: updatedArray,
      };

    default:
      return state;
  }
};

export default cartReducer;
