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
import EditQuestion from './question/EditQuestion'
import NewProspective from './prospective/NewProspective'
import EditProspective from './prospective/EditProspective'
import PublishedProspectives from './prospective/Published';
import Predictions from './prediction/Predictions';
import EditPredictions from './prediction/EditPredictions';
import ForAllUsers from './prediction/ForAllUsers'
import PrivateRoute from './auth/PrivateRoute'

const MainRouter = () => {
  return (
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>

        <PrivateRoute path="/prospectives/published"component={PublishedProspectives} />
        <PrivateRoute path="/predictions/for/:prospectiveId" component={Predictions} />
        <PrivateRoute path="/predictions/edit/for/:prospectiveId" component={EditPredictions} />
        <PrivateRoute path="/predictions/submitted/for/:prospectiveId" component={ForAllUsers} />

        <PrivateRoute path="/admin/prospectives" component={Prospectives}/>
        <PrivateRoute path="/admin/prospective/new" component={NewProspective}/>
        <PrivateRoute path="/admin/prospective/edit/:prospectiveId" component={EditProspective}/>
        <PrivateRoute path="/admin/prospective/:prospectiveId" component={Prospective}/>
        <PrivateRoute path="/admin/question/new/:prospectiveId" component={NewQuestion}/>
        <PrivateRoute path="/admin/question/edit/:questionId" component={EditQuestion}/>
      </Switch>
    </div>
  )
}
export default MainRouter