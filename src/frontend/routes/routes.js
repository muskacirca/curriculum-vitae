import React from 'react';
import { IndexRoute, Route } from 'react-router';

import MainApp from '../components/MainApp'
import Music from '../components/Music'
import GitHub from '../components/GitHub'
import CurriculumVitae from '../components/CurriculumVitae'

var CurriculumVitaeWrapper = React.createClass({

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
})

export default  <Route>
                    <Route path="/" component={MainApp} >

                        <IndexRoute component={CurriculumVitaeWrapper} />

                        <Route path="github" component={GitHub} />

                        <Route path="music" component={Music} />

                        <Route path="cv" component={CurriculumVitaeWrapper}  />

                    </Route>
                </Route>