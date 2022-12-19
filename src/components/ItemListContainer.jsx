import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
   return (
      <div
         className="container ">
         <p className=" text-center text-[40px] py-[40px]">
            {greeting}
         </p>
         <div>
            <ItemList/>
         </div>
      </div >
   )
}

export default ItemListContainer
