
import { React } from 'react';
import ProfileReducer, { getUserStatus,initialState, selectUser } from './Profile-reducer';







it('new status should be added', () => {
    let data = "test-status"
    let newState = ProfileReducer(initialState, getUserStatus(data))
   expect(newState.status).toBe(data)
});

it('new user data should be added', () => {
    let user = {userId:0,aboutMe:"text"}
    let newState = ProfileReducer(initialState, selectUser(user))
   expect(newState.selectUser).toBe(user)
});