const Restaurent = ({ restData }) => (
  <div className="restaurent">
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restData?.info?.cloudinaryImageId}`} />
    <h3>{restData?.info?.name}</h3>
    <p>{restData?.info?.cuisines.join(",")}</p>
    <p>{restData?.info?.costForTwo}</p>
    <p>{restData?.info?.avgRating}</p>
  </div>
);


export default Restaurent