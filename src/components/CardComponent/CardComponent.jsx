import "./CardComponent.css";
import { useSelector } from "react-redux";
import { CardActions, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const CardComponent = (props) => {
  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);
  const handleDeleteClick = () => {
    props.onDeleteCard(props.id);
  };

  const handleEditClick = () => {
    props.onEditCard(props.id);
  };
  const handleAddToCart = () => props.onAddToCart(props.id, 1);

  return (
    <div className="col  ">
      <Carousel
        className="main-slide"
        interval={5000}
        showStatus={false}
        dynamicHeight={true}
        showThumbs={false}
        showArrows={false}
        showIndicator={false}
      >
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image}
            className="card-img-top "
            alt="..."
          />
        </div>
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image1}
            className="card-img-top "
            alt="..."
          />
        </div>
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image2}
            className="card-img-top "
            alt="..."
          />
        </div>
        <div className="image">
          <img
            style={{ textAlign: "center" }}
            src={props.image3}
            className="card-img-top "
            alt="..."
          />
        </div>
      </Carousel>
      <div style={{ textAlign: "center" }} className="card-body ">
        <h5 style={{ textAlign: "center" }} className="card-title">
          {props.name}
        </h5>

        <h6
          style={{ textAlign: "center" }}
          className="card-subtitle mb-2 font-bolder"
        >
          ₪{props.phone}
        </h6>
      </div>
      {props.userIDCard === props.userIDLoggedIn && IsloggedInRedux === true ? (
        <div
          style={{ justifyContent: "space-between", display: "flex" }}
          className="card-footer"
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      ) : (
        <CardActions
          disableSpacing
          style={{ justifyContent: "center", display: "flex" }}
        >
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      )}
    </div>
  );
};

export default CardComponent;
