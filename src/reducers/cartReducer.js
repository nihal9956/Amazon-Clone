const { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, REMOVE_QUANTITY, SET_USER, SET_FNAME, SET_LNAME, SET_ADDRESS, SET_NUMBER, SET_PINCODE, SET_MARK } = require("../Actions/cartActionType")

const initialState={
    items:[
        { id:1,
            img:'https://m.media-amazon.com/images/I/810V2h6AOhL._AC_UL320_.jpg',
            title:"Ben Martin Men's Relaxed Jeans",
            price:800,
            rating:5},
        {   id:'2',
        title:"Life's Amazing Secrets: How to Find Balance and Purpose in Your Life",
        img:'https://images-na.ssl-images-amazon.com/images/I/41S8TQ9aNoL._SX323_BO1,204,203,200_.jpg',
        price:235,
        rating:4},
        { id:'3',
        title:"Amazon Brand-Queen Size Wood Bed",
        img:'https://m.media-amazon.com/images/I/71NaO4svX+L._AC_UL320_.jpg',
        price:12000,
        rating:5},
        {  id:'4',
        title:"ASUS VivoBook 14 Intel Core i3-1005G1",
        img:'https://images-na.ssl-images-amazon.com/images/I/81TRaQLC%2BjL._SX679_.jpg',
        price:36775,
        rating:4},
        {id:'5',
        title:"Wonderchef Nutri-Blend Mixer Grinder, 400W, 3 Jars (White)",
        img:'https://m.media-amazon.com/images/I/61iKfeOGFpL._AC_UL320_.jpg',
        price:599,
        rating:3},
        { id:'6',
        title:"Cadbury Celebrations Rich Dry Fruit Chocolate Gift Box, 177 g",
        img:'https://images-na.ssl-images-amazon.com/images/I/6170CMhkAZL._SX679_.jpg',
        price:455,
        rating:4},
        {    id:'7',
        title:"Sony Bravia 125.7 cm (50 inches) Full HD LED Smart TV KLV-50W672G (Black) (2019 Model)",
        img:'https://m.media-amazon.com/images/I/81y7qQG1GvL._AC_UY218_.jpg',
        price:51140,
        rating:5}
        
    ],
    addItems:[],
    total:0,
    qty:0,
    user:'',
    fName:'',
    lName:'',
    address:'',
    number:'',
    pincode:'',
    landMark:''
}

const reducer=(state=initialState,action)=>{

  if(action.type===ADD_TO_CART){
   
    let addedItem = state.items.find(item=> item.id === action.id)
    let itemExist=state.addItems.find(item=>action.id===item.id)

    if(itemExist){
        addedItem.quantity+=1
        return{
            ...state,
            total:state.total+addedItem.price,
            qty:state.qty+1
        }
    }else{
        addedItem.quantity=1
        let newTotal=state.total+addedItem.price
        return{
            ...state,
            addItems:[...state.addItems,addedItem],
            total:newTotal,
            qty:state.qty+1

            
        }
    }
         
     
  }else if(action.type===REMOVE_FROM_CART){

    const newItem=state.addItems.filter((item)=>action.id!==item.id)
    const ItemRemoved=state.addItems.find((item)=>action.id===item.id)
    return{
        ...state,
        addItems:newItem,
        qty:state.qty-1,
        total:Number(state.total-ItemRemoved.price)
    }
    
  }else if(action.type===ADD_QUANTITY){
     let addedQty=state.items.find((item)=>item.id===action.id)
     
     addedQty.quantity+=1 
     console.log(addedQty.quantity);
     return{
         ...state,
         addedQty:addedQty.quantity+1,
         total:addedQty.price+state.total
         
         
     }
  }else if(action.type===REMOVE_QUANTITY){
    let addedQty=state.items.find((item)=>item.id===action.id)
    if(addedQty.quantity>1){
        addedQty.quantity-=1 
    }
    
    console.log(addedQty.quantity);
     
        return{
            ...state,
            
            
        }
     
   
 }else if(action.type===SET_USER){
return{
    ...state,
    user:action.user
}
 }else if(action.type===SET_FNAME){
     return {
         ...state,
         fName:action.fName

     }
 }else if(action.type===SET_LNAME){
    return {
        ...state,
        lName:action.lName

    }
}else if(action.type===SET_ADDRESS){
    return {
        ...state,
        address:action.address

    }
    
}else if(action.type===SET_NUMBER){
    return {
        ...state,
        number:action.number

    }
    
}
else if(action.type===SET_PINCODE){
    return {
        ...state,
        pincode:action.pincode

    }
    
}else if(action.type===SET_MARK){
    return {
        ...state,
        landMark:action.landMark

    }
    
}

    return state

}

export default reducer