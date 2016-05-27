'use strict';

import React from 'react'
import CurriculumVitaeItem from './CurriculumVitaeItem'

class CurriculumVitae extends React.Component {

    constructor(props) {
        super(props)
    }

    renderJobs(jobs, type) {
        return jobs.map((job, key) => {
            return <CurriculumVitaeItem key={type + key} item={job} />
        })
    }
    

    render() {

        var cv = this.props.cv

        if(cv) {
            var jobs = this.renderJobs(cv.jobs, "jobs")
            var educations = this.renderJobs(cv.educations, "educations")
            
            return  <div className="page-content">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="category-container">
                                    <div className="category-header">
                                        <h2>Expériences professionelles</h2>
                                    </div>
                                    <div className="category-content">{jobs}</div>
                                </div>
                                <div className="category-container">
                                    <div className="category-header">
                                        <h2>Formation</h2>
                                    </div>
                                    <div className="category-content">
                                        {educations}
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
        } else {
            return <div></div>
        }
    }
}

export default React.createClass({

    getInitialState: function() {
        return {

        }
    },

    componentDidMount: function() {
        $.ajax({
            url: "/data/cv-data-2016.json",
            dataType: 'json',
            success: function (response) {
                this.setState({cv: response})
            }.bind(this)
        });
    },

    render: function() {
        return <CurriculumVitae cv={this.state.cv} />
    }
});
