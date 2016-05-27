'use strict'

import React from 'react'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    renderFrameworks(skill) {
        if(skill.frameworks) {
            return skill.frameworks.map((framework ,key) => {
                return <li key={framework.name + "-" + skill.name}>
                    <strong>
                        <a target="_blank" href={framework.website}>{framework.name}</a>
                    </strong>
                </li>
            })
        }
    }

    renderSkill(skills) {
        if(skills) {
            return  skills.map((skill, key) => {
                var frameworks = this.renderFrameworks(skill)
                return  <div className="skill-box" key={"skill" + key}>
                    {skill.name}
                    <div className="skill-box-content">
                        <ul className="list-inline">
                            {frameworks}
                        </ul>
                    </div>
                </div>
            })
        }
    }

    render() {

        let cv = this.props.cv;
        let skills = cv ? this.renderSkill(cv.skills) : null;

        return  <div className="row">
                    <div className="dashboard-container col-md-8 col-md-offset-2">
                        <h2>Dévelopeur Fullstack (7 ans d'expériences)</h2>
                        <div className="skill-content">
                            {skills}
                        </div>
                    </div>
                </div>
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
        return <Dashboard cv={this.state.cv} />
    }
});
