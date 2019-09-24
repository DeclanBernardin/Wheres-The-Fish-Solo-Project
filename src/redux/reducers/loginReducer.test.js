import loginModeReducer from './loginModeReducer';

describe('Testing loginModeReducer states', () => {
    test('should have its correct initial state', () => {
        let action = {};
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('login');
    })
})

describe('Testing loginModeReducer states', () => {
    test('should have its correct initial state', () => {
        let action = { type: 'SET_TO_REGISTER_MODE' };
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('register');
    })
})

describe('Testing loginModeReducer states', () => {
    test('should have its correct initial state', () => {
        let action = { type: 'SET_TO_LOGIN_MODE' };
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('login');
    })
})