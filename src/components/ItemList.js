import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) =>{
  const dispatch = useDispatch();
 const handleAddItem =(item) => {
  dispatch(addItem(item));

 }

     return (
 <div className="p-4 bg-white text-left">
          {props.category.itemCards?.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-2 flex">
              <div className="flex-1">
                <h4 className="font-semibold">{item.card.info.name}</h4>
                <p className="text-sm text-gray-600">
                  ₹{item.card.info.price ? item.card.info.price / 100 : 'N/A'}
                </p>
                <p className="text-sm">{item.card.info.description}</p>
              </div>
              {item.card.info.imageId && 
                <div className="flex flex-col items-center">
                  <img
                    src={IMG_CDN_URL + item.card.info.imageId}
                    alt={item.card.info.name}
                    className="w-20 h-20 object-cover rounded mb-2"
                  />
                  <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"  onClick={ () => handleAddItem(item)}>
                    ADD +
                  </button>
                </div>
              }
            </div>
          ))}
        </div>


     )
}

export default ItemList;