'use strict';

import React from 'react'

class CurriculumVitaeItem extends React.Component {

    constructor(props) {
        super(props)
    }

    renderCVItemList(missions) {
        if(missions) {
            return missions.map((mission, key) => {
                return <li key={"mission-" + key}>{mission}</li>
            })
        }
    }

    computeDate(start, end) {

        if(end == null) return <em>{"Depuis " + start}</em>
        if(start == end) return <em>{start + "(6 mois)"}</em>

        return <em>{start + " - " + end}</em>
    }

    render() {

        var item = this.props.item;
        var cvItemList = this.renderCVItemList(item.activities)
        var computedDate = this.computeDate(item.start, item.end)

        return  <div className="row">
                    <div className="col-sm-2 col-xs-12 col-md-3 cv-item-dates">
                        {computedDate}
                    </div>
                    <div className="col-sm-10 col-xs-12 col-md-9 cv-item-content">
                        <div className="col-sm-12 col-xs-12 col-md-12">
                            <b><a target="_blank" href={item.website}>{item.name}</a></b>, {item.shortDescription}
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-12">
                            <div className="job-description">
                                {item.description}
                            </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-12 mission-content">
                            <ul>
                                {cvItemList}
                            </ul>
                        </div>
                    </div>

                </div>
    }


}

export default CurriculumVitaeItem
