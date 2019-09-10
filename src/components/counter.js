import React from 'react'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class Counter extends React.Component{
    render(){
        const { counter, inc, dec, rnd } = this.props;
        return(
            <div>
                <h2>{counter}</h2>
                <button onClick={dec}>
                    DEC
                </button>
                <button onClick={inc}>
                    INC
                </button>
                <button onClick={rnd}>
                    RND
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// };

export default connect(mapStateToProps, actions)(Counter);