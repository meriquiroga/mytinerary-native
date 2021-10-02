import AsyncStorage from "@react-native-async-storage/async-storage";

const usersReducer = (state = {token: null, name: null, img: null, userId: null}, action) => {
    switch(action.type ) {
        case 'LOGIN_SIGNUP':
            AsyncStorage.setItem('token', action.payload.token)
            AsyncStorage.setItem('name', action.payload.name)
            AsyncStorage.setItem('img', action.payload.img)
            AsyncStorage.setItem('userId', action.payload.userId)
            return {
                token: action.payload.token,
                name: action.payload.name,
                img: action.payload.img,
                userId: action.payload.userId
            }
        case 'LOG_OUT':
            AsyncStorage.removeItem('token')
            AsyncStorage.removeItem('name')
            AsyncStorage.removeItem('img')
            AsyncStorage.removeItem('userId')
            return {
                token: null,
                name: null,
                img: null,
                userId: null                
            }
        default: 
            return state
    }
}

export default usersReducer