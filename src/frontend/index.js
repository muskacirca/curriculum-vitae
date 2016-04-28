import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'

import routes from './routes/routes'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(<Router history={appHistory} routes={routes} />, document.getElementById('app'))
