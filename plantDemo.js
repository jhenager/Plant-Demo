// This function stores our state.

// Without initialState

// const storeState = () => {
//     let currentState = {};
//     return (stateChangeFunction = state => state) => {
//       const newState = stateChangeFunction(currentState);
//       currentState = {...newState};
//       return newState;
//     }
//   }


// With Initial State

  const storeState = (initialState) => {
    let currentState = initialState; // We could pass in an initial state to the object instead of starting with an empty object as well.
    return (stateChangeFunction) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }

  // Initial State Values ()
  const sprout = { soil: 1, light: 1, water: 1 };
  const tree = { soil: 5, light: 5, water: 5 };
  const pikachu = { hp: 20, speed: 15, attack: 10 }
  
  //  newSprout = storeState(sprout);
  
  
  
  const stateControl = storeState();
  
  // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
  
  const changeState = (prop) => {    // soil, light, etc. These are the "keys"
    return (value) => {         // how much?
      return (state) => ({      //of what?
        ...state,           // spread operator
        [prop] : (state[prop] || 0) + value     // the format and logic
      })
    }
  }
  
  // We create four functions using our function factory. We could easily create many more.
  
  const feed = changeState("soil");
  const blueFood = changeState("soil")(5);
  const damage = changeState("hp")(-5);
  
  const hydrate = changeState("water")(1);
  const superWater = changeState("water")(5);


const fedSprout = feed(1)(newSprout);



//   return (stateChangeFunction = state => state)

// It may look strange, but what we are saying here 
// is that if stateChangeFunction is undefined 
// (no argument is passed in), the stateChangeFunction 
// should be state => state.

// That means all we need to do is call stateControl() 
// (without arguments) in order to just return the current state!