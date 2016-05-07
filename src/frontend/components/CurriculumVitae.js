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

        var cv = this.props.cv

        if(cv) {
            var jobs = this.renderJobs(cv.jobs, "jobs")
            var educations = this.renderJobs(cv.educations, "educations")
            var skills = this.renderSkill(cv.skills)
            return  <div className="">
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
                        <div className="category-container">
                            <div className="category-header"><h2>Compétences informatique</h2></div>
                            <div className="skill-content">
                                {skills}
                            </div>
                        </div>
                    </div>
        } else {
            return <div></div>
        }
    }
}

export default CurriculumVitae
