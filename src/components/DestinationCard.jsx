import PropTypes from 'prop-types';

function DestinationCard({ name, location, image, description, price }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "250px" }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{name}</h2>
      <h4>{location}</h4>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}

DestinationCard.propTypes = {
  name: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
};

export default DestinationCard;