import React, { Component } from 'react';
import Dropdown from '../shared/Dropdown'
import Datepicker from '../shared/Datepicker'
import TextInput from '../shared/TextInput'
import TextInputLarge from '../shared/TextInputLarge'
import RadioButtons from '../shared/RadioButtons'

class Details extends Component {

  render() {
    var designationOptions = {
      "": "", 
      "Option 1": "option1", 
      "Option 2": "option2"
    }

    var activityTypeOptions = {
      "Fundraising": "fundraising",
      "Direct Candidate Support":  "directCandidateSupport"
    }

    var sourceCodeOptions = {
      "": "", 
      "Option 1": "option1", 
      "Option 2": "option2",
      "Option 3": "option3",
    }

    return (
      <div>
        <div className="page-title-container">
          <div className="page-title-icon">
            <div className="square green">
              <span aria-hidden="true" className="glyphicons glyphicons-bank"></span>
            </div>
          </div>
          <div className="page-title-group">
            <h3 className="page-title-sub">H & L Manager</h3>
            <h5 className="page-title">Add New Activity Ratio (H2)</h5>
          </div>
        </div>
        <section className="padding-top-lg">
          <div className="panel panel-default">
            <div className="panel-content">
              <div className="grid-half">
                <div className="col-md-3">
                  <h2>Activity Ratio Details</h2>
                </div>
                <div className="col-md-6">
                  <div className="input-list ng-scope">
                    <Dropdown required={true} label={"Designation"} options={designationOptions} />
                    <TextInput required={true} label={"Activity Name"} />
                    <RadioButtons required={true} label={"Activity Type"} options={activityTypeOptions} />
                    <Dropdown required={false} label={"Source Code"} options={sourceCodeOptions} inputMessage={"Only one source code per transaction"} />
                    <TextInputLarge required={false} label={"Explanatory Text"} placeholder={"Maximum of 4000 characters."} />
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <hr />
              <div className="grid-half">
                <div className="col-md-3">
                  <h2>Add an Initial Radio Item</h2>
                  <p className="text-sm">
                    Provide the Federal/Non-Federal Allocation breakdown for this Activity. Revisions to this ratio may be added now or in the future.
                  </p>
                </div>
                <div className="col-md-3">
                  <Datepicker label={"Start Date"} required={true} />
                  <TextInput required={true} label={"Federal %"} />
                  <TextInput required={true} label={"Non-Federal %"} />
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="panel-buttons page-bottom">
            <button className="btn btn-gray">Cancel</button>
            <button className="btn btn-blue">Save</button>
          </div>
        </section>
      </div>
    );  
  }
}

export default Details;