import React, { Component, Fragment } from "react";

class PricingCard extends Component{
  render(){
    return(
      <Fragment>
        <div class="card border-bottom-0 border-left-0 border-top-0 rounded-0  py-3  text-center pricing_table5 mb-5 mb-lg-0">
          <div class="card-body ">

            <a href="#" class="btn px-5 btn-success rounded-pill mb-4">FREE</a>

            <div class="text-success mb-5">Always Free</div>

            <span>Most basic features of a multi vendor store</span>
            <hr />
            <ul class="list-group list-unstyled text-muted  mb-2 text-left">
              <li class="pb-3"><i class="fas fa-plus"></i> Unlimited Vendors</li>
              <li class="pb-3"><i class="fas fa-plus"></i> Frontend Vendor Dashboard</li>
              <li class="pb-3"><i class="fas fa-plus"></i> Order Management</li>
              <li class="pb-3"><i class="fas fa-plus"></i> Vendor Withdraw system</li>
              <li class="mb-5"><a href="#" class="text-danger mb-5">See All Features <i class="fas fa-long-arrow-alt-right"></i></a></li>
            </ul>

            <a href="#" class="btn px-4 py-2 btn-success">Choose Plan</a>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default PricingCard;