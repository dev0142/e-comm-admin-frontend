import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Allproduct() {
    const[allProduct,setAllProduct]=useState([]);
    console.log(allProduct);

    

const fetchAllProducts=()=>{
    axios.get("https://bhoomihillsnaturals-backend.herokuapp.com/fetch").then(res=>{
        setAllProduct(res.data);
        
    }).catch(err=>{
        console.log(err);
        })
}
const deleteEvent=async(id)=>{
    try {
        if (window.confirm("Are you sure want to delete this event")) {
            const res=await axios.delete("https://bhoomihillsnaturals-backend.herokuapp.com/delevent",{data:{id:id}});

            if(res.status === 200)
            {
               alert("successfully deleted");
               window.location.reload();
            }
        
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

useEffect(() => {
    fetchAllProducts();  
}, []);

    return (
        <div style={{ width:`82%`}}>
            <div className='heading'>
                Product List
            </div>
            <hr />
                <table style={{width:`100%`}}>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Action</th>
                </tr>
                {
                    allProduct.map((product,index)=>{
                        return(
                        <tr  key={index}>
                            <td style={{textAlign:`center`}}>{product.name}</td>
                            <td style={{textAlign:`center`}}><img style={{height:`60px`,width:`60px`}} src={product.images[0]} alt={product.name} /></td>
                            <td style={{textAlign:`center`}}>{product.category}</td>
                            <td style={{textAlign:`center`}}>{product.brand}</td>
                            <td style={{textAlign:`center`}}>{product.price}</td>
                            <td style={{textAlign:`center`}}>{product.quantity}</td>
                            <td style={{textAlign:`center`}}>{product.discount}</td>
                            <td style={{display:`flex`,justifyContent:`space-evenly`,alignItems:`center`,marginTop:`20px`}}><Link to={`/edit/${product._id}`} ><EditIcon style={{cursor:`pointer`,textDecoration:`none`,color:`black`}} /></Link><DeleteIcon style={{cursor:`pointer`}} onClick={()=>deleteEvent(product._id)} /></td>
                        </tr>
                        )
                    })
                }
                </table>
        </div>
    )
}

export default Allproduct
