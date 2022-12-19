import Clicker from "./Clicker"

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  return (
      <div
          className="grid shadow-lg w-[400px] mx-auto
          p-[28px] rounded-[12px] gap-[16px]">
          <img src={pictureUrl} alt={id}
              className="object-cover mx-auto
          w-[250px] h-[250px] rounded-[10px]"/>
          <div>
              <p className="text-[32px] font-bold">{title}</p>
              <p className="text-[20px] font-light"> {description} </p>
          </div>
          <p className="text-center text-[32px] font-semibold"> ${price} </p>
          <Clicker />
          <p className="text-right text-[16px] font-medium text-gray-400"> 
            Disponible: {" "}{stock}{" "}Unidades
          </p>
      </div >
  )
}

export default ItemDetail