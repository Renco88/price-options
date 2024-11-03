
const Link = ({ route }) => {
  return (
   
    <li className="mr-4 px-6 list-none hover:bg-purple-200">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
