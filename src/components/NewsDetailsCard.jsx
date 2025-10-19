import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";


const NewsDetailsCard = ({news}) => {
    
    const {title, details, image_url} = news
    
    return (
        <div>
            <img src={image_url} alt={image_url} className="w-full object-cover" />
           <h2 className="text-3xl font-semibold my-5">{title}</h2> 
           <p>{details}</p>
           <Link to={`/category/${news.category_id}`} className="btn btn-secondary md:w-fit w-full mt-5"><FaArrowLeftLong /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;