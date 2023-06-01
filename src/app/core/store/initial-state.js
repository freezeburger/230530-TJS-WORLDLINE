
export const initialState = {
    products:[],
    version:"1.0.0",
    user:{
        name:'',
        email:''
    },
    selectedProduct:null,
    networkActivity:'idle', // busy
    networkStatus:'online' // offline
}