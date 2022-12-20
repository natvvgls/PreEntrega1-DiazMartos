import { products } from "../mock/products"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { error } from "daisyui/src/colors";

const ItemListContainer = ({ greeting }) => {

   const { idCategory } = useParams();
   const [item, setItem] = useState([])

   const getProducts = () => new Promise((resolve, reject) => {
      setTimeout(() => resolve(products), 2000);
   })

   useEffect(() => {
      if (idCategory) {
         getProducts()
            .then(products => setItem(products.filter(product => product.category === idCategory)))
            .catch(error = console.error(error))
      } else {
         getProducts()
            .then(products => setItem(products))
            .catch(error = console.error(error))
      }
   }, [idCategory])


   return (
      <div>
         <p p className=" text-center text-[40px] py-[40px]" >
            {greeting}
         </p>
         <ItemList item={item} />
      </div>
   )
}

export default ItemListContainer
