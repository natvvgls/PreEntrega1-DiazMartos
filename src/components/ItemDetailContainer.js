import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { products } from "../mock/products"

const ItemDetailContainer = () => {

   const { id } = useParams();
   const [item, setItem] = useState([])

   const getItemDetail = () => new Promise((resolve, reject) => {
       const item = products.find(p => p.id == id)
      setTimeout (()=> {
         resolve(item)
      },50);
   })

   useEffect(() => {
      getItemDetail().then(response => {
         setItem(response)
      })
   }, [id])

   const { title, description, price, pictureUrl, stock } = item;

   return (
      <div className="container py-[50px]">
         <ItemDetail title={title} description={description} price={price} pictureUrl={pictureUrl} stock={stock}/>
      </div>
   )
}

export default ItemDetailContainer