import classes from "./BurgerBuilder.module.css";
//import clsses from "../../components/UI/Modal/Modal.module.css";
import Burger from "../../components/Burger/Burger";
import { Component } from "react";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import Auxy from "../../hoc/Auxy";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICE_DETAIL = {
  meat: 1.3,
  cheese: 0.7,
  bacon: 0.9,
  salad: 0.6,
};

class BurgerBuilder extends Component {
  state = {
    inside: {
      meat: 1,
      cheese: 1,
      bacon: 1,
      salad: 1,
    },
    totalPrice: 4,
    disabled: {
      meat: false,
      salad: false,
      cheese: false,
      bacon: false,
    },
    purchasing: false,
  };

  addIngredientHandler = (type) => {
    const previous = this.state.inside[type];
    const updated = previous + 1;
    const condition = {
      ...this.state.disabled,
    };
    if (condition[type]) {
      condition[type] = false;
    }
    const newObj = {
      ...this.state.inside,
    };
    newObj[type] = updated;
    const addToPrice = PRICE_DETAIL[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + addToPrice;
    this.setState({
      totalPrice: newPrice,
      inside: newObj,
      disabled: condition,
    });
  };

  deleteIngredientHandler = (type) => {
    const previous = this.state.inside[type];
    const updated = previous - 1;
    const condition = {
      ...this.state.disabled,
    };
    if (updated === 0) {
      condition[type] = true;
    }
    const newObj = {
      ...this.state.inside,
    };
    newObj[type] = updated;
    const subToPrice = PRICE_DETAIL[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - subToPrice;
    this.setState({
      totalPrice: newPrice,
      inside: newObj,
      disabled: condition,
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelHandler = () => {
    this.setState({ purchasing: false });
  };
  continueHandler = () => {
    alert("Order Placed Succesfully");
    this.cancelHandler();
  };
  render() {
    return (
      <Auxy>
        <div className={classes.Bodyy}>
          <Modal show={this.state.purchasing} hide={this.cancelHandler}>
            <OrderSummary
              ingredients={this.state.inside}
              cancel={this.cancelHandler}
              continue={this.continueHandler}
              price={this.state.totalPrice}
            />
          </Modal>
          <Burger inside={this.state.inside} />
          <BurgerControls
            add={this.addIngredientHandler}
            delete={this.deleteIngredientHandler}
            check={this.state.disabled}
            price={this.state.totalPrice}
            purchasing={this.purchaseHandler}
          />
        </div>
      </Auxy>
    );
  }
}

export default BurgerBuilder;
