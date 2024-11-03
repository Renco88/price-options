import Features from "../Features/Features";

const PriceOpction = ({ opction }) => {
  const { name, price, features } = opction;
  return (
    <div>
      <div className="bg-blue-500 rounded-lg p-4 flex flex-col text-white">
        <h2 className="text-center">
          <span className="text-5xl font-extrabold ">{price}</span>
          <span className="text-2xl font-extrabold ">/MON</span>
        </h2>
        <h4 className="text-3xl text-center my-8 font-extrabold ">{name}</h4>

        <div className="pl-6 flex-grow">
          {features.map((feature, idx) => (
            <Features key={idx} feature={feature}></Features>
          ))}
        </div>
        <button className="mt-12 bg-green-500 rounded-lg w-full
        py-2 font-bold hover:bg-green-900 ">Buy Now</button>
      </div>
      
    </div>
  );
};

export default PriceOpction;
