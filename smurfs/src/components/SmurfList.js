import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf'



class SmurfList extends React.Component {


  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs)
      return (
        <div>
          <p>is fetching Smurfs</p>
        </div>
      );
      return (
        <div className="smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurfs-container"> 
                <Smurf 
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }

const mapStateToProps = state => {
    return {
       smurfs: state.smurfs,
       fetchingSmurfs: state.fetchingSmurfs 
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfList);
