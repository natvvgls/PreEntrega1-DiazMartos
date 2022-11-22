
const ItemListContainer = ({ greeting }) => {
   return (
      <div
         className="w-full py-[24px] text-center
         bg-[#BED887] rounded-[8px]">
         <p className="font-semibold text-[24px]"> 
            {greeting} 
         </p>
      </div>
   )
}

export default ItemListContainer
