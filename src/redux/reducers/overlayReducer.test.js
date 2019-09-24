import overlayReducer from './overlayReducer';


describe('testing the clear state from the overlay reducer', () => {
    test('should have its correct initial state', () => {
        let action = { type: 'CLEAR_REDUCER'};
        let newState = overlayReducer(undefined, action);
        expect(newState).toEqual([]);
    })
})