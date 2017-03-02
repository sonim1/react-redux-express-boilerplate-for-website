import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CounterActions, ADD_COUNT } from '../../actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }

    click() {
        this.props.countIncrease(ADD_COUNT);
    }

    render() {
        return (
            <div>
                <h2>Counter : {this.props.count.counter}
                </h2>
                <button className="btn btn-default" onClick={this.click}>Click</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countIncrease: () => { dispatch(CounterActions(ADD_COUNT)); },
    };
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
