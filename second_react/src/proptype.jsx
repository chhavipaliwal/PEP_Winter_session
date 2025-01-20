// Use PropTypes to validate the props of a component Product that takes name, price, and
// isAvailable. Make sure to enforce that name is a string, price is a number, and isAvailable is a boolean.
// function Product(props) {
//   return (
//     <div>
//       <h1>props.price</h1>
//       <p>props.name</p>
//       <p>props.isAvailable</p>
//     </div>
//   );
// }
// Product.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number,
//   isAvailable: Props.bool,
// };
// export default Product;
import PropTypes from "prop-types";

function Product(props) {
  return (
    <div>
      <h1>{props.price}</h1>
      <p>{props.name}</p>
      <p>{props.isAvailable ? "Available" : "Not Available"}</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  isAvailable: PropTypes.bool,
};

export default Product;
