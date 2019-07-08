/* Use Button Component
* import Button from '../../buttons/Button'
* <Button btnTypes="submit" classes="btn btn-info" label="Basic"/> 
 */

import React, { Component, Fragment} from "react";

class Buttons extends Component {
  render(){
    return(
      <Fragment>
        <button type={this.props.btnTypes} className={this.props.classes} >{this.props.label}</button>
      </Fragment>
    );
  }
}
export default Buttons;