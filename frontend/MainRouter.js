import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Menu from './core/Menu'
import Prospectives from './prospective/Prospectives'
import Prospective from './prospective/Prospective'
import NewQuestion from './question/NewQuestion'
import NewProspective from './prospective/NewProspective'
import EditProspective from './prospective/EditProspective'

const MainRouter = () => {
  return (
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>

        <Route path="/admin/prospectives" component={Prospectives}/>
        <Route path="/admin/prospective/new" component={NewProspective}/>
        <Route path="/admin/prospective/edit/:prospectiveId" component={EditProspective}/>
        <Route path="/admin/prospective/:prospectiveId" component={Prospective}/>
        <Route path="/admin/question/new/:prospectiveId" component={NewQuestion}/>
      </Switch>
    </div>
  )
}
export default MainRouter