'use strict';

import React from 'react'

class Projects extends React.Component {

    constructor(props) {
        super(props)
    }

    renderProjects(projects) {
        if(projects) {
            return projects.map((p, id) => {
                return  <div key={"projects-list-" + id} className="project-container">
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <img className="media-object img-rounded" src={p.image} alt={p.name} />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <div className="media-heading">
                                        <div className="">
                                            <a className="inline__text" href={p.website}><h4>{p.name}</h4></a>
                                            <span className="inline__text label label-default">{p.position}</span>
                                        </div>
                                    </div>
                                    <p>{p.shortDescription}</p>
                                    <p>{p.description}</p>

                                </div>
                            </div>
                        </div>
            })
        }
    }

    render() {

        var projects = this.renderProjects(this.props.projects)

        return  <div className="page-content">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            {projects}
                        </div>
                    </div>
                </div>
    }
}

export default React.createClass({

    getInitialState: function() {
        return {}
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
        let projects = this.state.cv ? this.state.cv.projects : [];
        console.log("projects " + JSON.stringify(projects))
        return <Projects projects={projects} />
    }
});

