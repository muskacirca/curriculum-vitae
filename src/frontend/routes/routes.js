import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Dashboard from '../components/Dashboard'
import MainApp from '../components/MainApp'
import Music from '../components/Music'
import Projects from '../components/Projects'
import CurriculumVitae from '../components/CurriculumVitae'

const App = React.createClass({
    displayName: 'App',

    render() {
        let toggleDashboard = this.props.location.pathname == "/" ? true : false;
        console.log("in route " + this.props.location.pathname + ", toggleDashboard " + toggleDashboard);
        return React.cloneElement(
            <MainApp />,
            {toggleDashboard: toggleDashboard, 
                children: this.props.children}
        );
    }
});

export default  <Route>
                    <Route path="/" component={App} >

                        <IndexRoute component={Dashboard} />

                        <Route path="projects" component={Projects} />

                        <Route path="music" component={Music} />

                        <Route path="cv" component={CurriculumVitae}  />

                    </Route>
                </Route>
