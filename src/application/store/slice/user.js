import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userId: JSON.parse(localStorage.getItem('userDetails'))?.userId ?? null,
    businessName: JSON.parse(localStorage.getItem('userDetails'))?.businessName ?? '',
    userRoles: JSON.parse(localStorage.getItem('userDetails'))?.userRoles ?? '',
    email: JSON.parse(localStorage.getItem('userDetails'))?.email ?? '',
    kycExist: JSON.parse(localStorage.getItem('userDetails'))?.kycExist ?? false,
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export default userSlice.reducer;
export const { loginSuccess } = userSlice.actions