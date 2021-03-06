
export const initialState = {   // Initialialy the User auth and basket Item is Null.
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => 
    basket?.reduce(( amount, item ) => item.price + amount, 0)


const reducer = (state, action) => {                                                        // Creating Reducers
    switch(action.type) {
        case 'SET_USER': 
            return { ...state, user: action.user}
        case 'ADD_TO_BASKET':
            return { ...state, basket: [...state.basket, action.item] 
            };
        case 'EMPTY_BASKET':
            return { ...state, basket: [] };
         break;
        case 'REMOVE_FROM_BASKET':
            let newCart = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >=0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `cant Remove Product with (id: ${action.id}) `
                );
            }
            return { ...state, basket: newCart };
         break;
        default:
            return state;
    }
}

export default reducer;
