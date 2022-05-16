import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardComponent from "../components/CardComponent/CardComponent";
import { useHistory } from "react-router-dom";
import CardUpdate from "./CardUpdate";
import { NikeStore } from "./NikeStore";
import Basket from "./Basket";
const CardsPanelPage = () => {
  const history = useHistory();

  const URL = "http://localhost:8181/api/";
  const userInfoRedux = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);
  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setCardsArr(data);
      })
      .catch((err) => {});
  }, []);

  const [userArr] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditUser = (id) => {
    let newUser = userArr.find((item) => {
      return item._id === id;
    });

    setSelectedUser({ ...newUser });
  };

  const handleUpdateUser = (id) => {
    let newCardsArr = cardsArr.filter((item) => item._id !== id);
    setCardsArr(newCardsArr);
    axios.get("/cards/allCards").then(({ data }) => {
      setCardsArr(data);
      setSelectedUser(null);
    });
  };

  const handleDeleteCard = (id) => {
    axios.delete(`${URL}${id}`).then((res) => {
      const newCardsArr = cardsArr.filter((item) => item._id !== id);
      setCardsArr(newCardsArr);
    });
  };
  const handleAddToCart = (item) => {
    const exist = cartItems.find((x) => x._id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  return (
    <div>
      <NikeStore></NikeStore>
      <br />

      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-5">
        {cardsArr.map((item) => {
          return (
            <Fragment>
              <CardComponent
                id={item._id}
                key={item._id}
                name={item.name}
                description={item.description}
                phone={item.phone}
                image={item.image}
                image1={item.image1}
                image2={item.image2}
                image3={item.image3}
                userIDCard={item.userID}
                userIDLoggedIn={userInfoRedux._id}
                onDeleteCard={() => handleDeleteCard(item.id)}
                onEditCard={handleEditUser}
                onAddToCart={handleAddToCart}
              />

              {userInfoRedux._id === item.userID &&
              IsloggedInRedux === true &&
              selectedUser !== null ? (
                <CardUpdate
                  name={item.name}
                  description={item.description}
                  phone={item.phone}
                  image={item.image}
                  id={item._id}
                  onUpdateUser={handleUpdateUser}
                ></CardUpdate>
              ) : (
                ""
              )}
            </Fragment>
          );
        })}
      </div>
      {userInfoRedux.biz === true && (
        <button
          style={{
            display: "flex",
            margin: "0 auto",
            marginTop: "10px",
          }}
          type="button"
          className="btn btn-secondary mb-2 mb-lg-0 btn-lg"
          onClick={() => history.push("/cardregister")}
        >
          Add a New Card
        </button>
      )}
      {/* <Basket onAddToCart={handleAddToCart} cartItems={cartItems}></Basket> */}
    </div>
  );
};

export default CardsPanelPage;
