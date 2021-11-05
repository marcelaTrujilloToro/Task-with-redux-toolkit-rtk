import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import { NotFoundPage } from "../Tasks/Screens/NotFound/NotFound";
import CreateTasks from "../Tasks/Screens/CreateTask/CreateTasks";
import EditTask from "../Tasks/Screens/EditTask/EditTask";
import ViewTasks from "../Tasks/Screens/ViewTasks/ViewTasks";
import { NavMenu } from "../Tasks/Components/NavMenu/NavMenu";


export const AppRuter = () => {
  return (
    <BrowserRouter>
      <NavMenu/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/createTask" component={CreateTasks} />
        <Route exact path="/editTask/:id" component={EditTask} />
        <Route exact path="/viewTasks" component={ViewTasks} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
