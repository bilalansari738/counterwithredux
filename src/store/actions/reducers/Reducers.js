const INITIAL_STATE = {
    count: 0
};

const changeTheNumber = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "Decreament":
            return {
                count: state.count - 1
            };
        case "Increament":
            return {
                count: state.count + 1
            };
        default:
            return state;
    }
}
export default changeTheNumber;