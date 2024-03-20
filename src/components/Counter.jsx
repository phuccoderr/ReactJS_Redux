import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log(props);
  const handlePlus = () => {
    props.plus();
  }

  const handleMinus = () => {
    props.minus();
  }
  return (
    <div>
      <h3>Counter App</h3>
      <form>
        <input type="button" value="+" onClick={handlePlus} />
        {props.count}
        <input type="button" value="-" onClick={handleMinus} />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.initCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch({type: "plus"}),
    minus: () => dispatch({type: "minus"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
