

export const ApiReducer = (state, action) => {
  let newState = {...state}
  let {payload, type} = action
  newState[type] = payload;
  return newState;
}

// export const ApiReducer = (state, action) => {
//   let newState;
  
//   switch(action.type) {
//     case 'set_data':
//       newState = {
//         data: action.payload,
//       };

//       break;
//       default:
//         throw new Error();
//   }
//   return newState;
// }


