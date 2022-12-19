import Clicker from "./Clicker"
import { Link } from "react-router-dom"

const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div
            className="grid shadow-lg w-full
            p-[20px] rounded-[12px] gap-[16px]">
            <img src={pictureUrl} alt={id}
                className="object-cover mx-auto
            w-[250px] h-[250px] rounded-[10px]"/>
            <div>
                <p className="text-[32px] font-bold">{title}</p>
                <p className="text-[20px] font-light"> {description} </p>
            </div>
            <Clicker />
            <p className="text-center text-[32px] font-semibold"> ${price} </p>
            <div className="flex justify-end">
                <Link to={`/item/${id}`}>
                    <button className='btn btn-primary
                     bg-white text-[#BED887] border-[#BED887]
                     hover:bg-[#BED887] hover:text-white hover:border-[#BED887]'>
                        ver detalle
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default Item
