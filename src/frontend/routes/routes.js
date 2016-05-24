import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Dashboard from '../components/Dashboard'
import MainApp from '../components/MainApp'
import Music from '../components/Music'
import Projects from '../components/Projects'
import CurriculumVitae from '../components/CurriculumVitae'



export default  <Route>
                    <Route path="/" component={MainApp} >

                        <IndexRoute component={Dashboard} />

                        <Route path="projects" component={Projects} />

                        <Route path="music" component={Music} />

                        <Route path="cv" component={CurriculumVitae}  />

                    </Route>
                </Route>
