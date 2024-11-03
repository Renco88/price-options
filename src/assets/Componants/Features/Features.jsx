import { FaRegCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center "><FaRegCheckCircle className="m-4"></FaRegCheckCircle> {feature}</p>
        </div>
    );
};

export default Features;