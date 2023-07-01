
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCart } from '../reduxdata/cartSlice'
export default function Item()
{
  
  const dispatch=useDispatch()
  const change=useSelector(state=>state.cart.value)
  var len=Object(change).length
  var pc=useSelector(state=>state.cart.value.reduce((total,item)=> { return total + parseInt(item.price)},0))
  
  console.log("cc",change)
 

  const remove=(event)=>{
    var rem=event.target.getAttribute('data-dom')
  dispatch(removeCart(rem))
  event.preventDefault()
  console.log(rem)
  }
  
  return <>
   <h4 className='text-center'>Add Items-{len}</h4>
  <div className="row">
  <div className="col-md-12">
  <table className="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>remove</th>       
      </tr>
    </thead>
    <tbody>
     {change.map((ob,index)=>
     
     <tr key={index}>
     <td>{index+1}</td>
     <td>{ob.name}</td>
     <td>{ob.price}</td>
     <td><img src={"data:image/png;base64,"+ob.image} alt="failed" style={{width:'100px',height:'80px'}}/></td>
     <td><button onClick={remove} data-dom={ob.id} >Remove</button></td>
     </tr>
 )}
  
 
    </tbody>
   </table>
   <div>
   total $ : {pc}
  </div>
  </div>
  </div>
  
  </>
}



// <td>total price :{data.reduce((total, item)=>total+(item.aprice*item.quantity),0)}</td>


// import React from 'react'

// export default function selectItem()
//  {
//   return <>
//     <div className="row">
//             <div className="col-md-12">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th>Name</th>
//                         <th>Image</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Total Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     ListCart.map((item,key)=>{
//                         return(
//                             <tr key={key}>    
//                             <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
//                             <td>{item.name}</td>
//                             <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
//                             <td>{item.price} $</td>
//                             <td>
//                                     <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
//                                     <span className="btn btn-info">{item.quantity}</span>
//                                     <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
//                             </td>
//                             <td>{ TotalPrice(item.price,item.quantity)} $</td>
//                         </tr>
//                         )
//                     })
                        
//                 }
//                 <tr>
//                     <td colSpan="5">Total Carts</td>
//                     <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
//                 </tr>
//                 </tbody>
/* <tbody>
     {cart.map((ob,index)=>{
     return(
     <tr key={index}>
     <td>{index+1}</td>
     {/* <td><img src={"data:image/png;base64,"+ob.prod_image} style={{width:'100px',height:'80px'}}/></td> */
    //  <td>{ob.prod_name}</td>
    //  <td>{ob.prod_price}</td>
     
    //  </tr>
//  )})}
//     </tbody> */}
              
//             </table>
//             </div>
//         </div>
//     </>
// }



