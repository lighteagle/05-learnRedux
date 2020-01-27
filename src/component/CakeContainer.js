import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function cakeContainer(props) {
  return (
    <div>
      <h2>Number of Cake : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispacth => {
  return {
    buyCake: () => dispacth(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
