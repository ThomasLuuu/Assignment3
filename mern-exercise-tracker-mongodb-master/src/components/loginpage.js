import React from 'react'

import { BrowserRouter as Router,Link, Route,Switch} from "react-router-dom";
import Admin from './admin';
import User from './user';
export default class loginpage extends React.Component{
    toggle(){
        this.setState({showAdmin: !this.state.showAdmin})
    }
    render(){
        return(
            
            <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                                &nbsp;
                        </div>
                        <div className="col-md-8">
                        <div className="row">
                        <div className="col-md-3">
                                <img src={'https://d1cavipgdpnjin.cloudfront.net/wp-content/uploads/2019/10/RMIT-University-Internship.png'}
                                    width={180} height={90}
                                />
                        </div>
                        <div className="col-md-9">
                            <h1 className="big-title">MyApps Portal</h1>

                        </div>
                    </div>
                    <div className="row">
                        <div className="title">
                            <h3 className="title-p1">
                                Welcome to your new RMIT login page!

                            </h3>
                            <h3 className="title-p2">
                                Simply add your details and you will be logged in as normal. If you have trouble logging in try resetting your password. If you still can’t log in, please call the Service & Support Centre on +613 9925 8888

                            </h3>
                        </div>
                    </div>
                    <div className="row p2">
                        <div className="title-2">
                            
                            <h3 className="title-p2">
                            This Identity Provider needs to validate your identity. Please login to your existing account here so that we can return verification back to your local service.
                            </h3>
                        </div>
                    </div>


                        </div>
                        <div className="col-md-2">
                            &nbsp;
                        </div>
                    </div>
                    <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    &nbsp;
                                </div>
                                <div className="col-md-4">
                                <h3>
                                    You want to login as:
                                </h3>
                                </div>
                                <div className="col-md-4">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-4">
                                    &nbsp;
                                </div>
                                <div className="col-md-4">
                                <Router>

                                <Link target="_blank" to="/admin" className="nav-link" >Admin</Link>
                               <Switch>
                                   <Route path="/admin">
                                        <Admin/>
                                   </Route>
                               </Switch> 
                               </Router>
                                </div>
                                <div className="col-md-4">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="row snip">
                            <div className="col-md-4">
                                    &nbsp;
                                </div>
                                <div className="col-md-4">
                                <Router>

                                <Link target="_blank" to="/user" className="nav-link" >User</Link>
                               <Switch>
                                   <Route path="/user">
                                        <User/>
                                   </Route>
                               </Switch> 
                               </Router>
                                </div>
                                <div className="col-md-4">
                                    &nbsp;
                                </div>
                            </div>
                            
                            <div className="row">
                            <div className="col-md-3">
                                    &nbsp;
                                </div>
                                <div className="col-md-6 title-p2">
                                <a >By signing in, you accept the rules of use of RMIT Systems.</a>
                                
                                </div>
                                <div className="col-md-3">
                                    &nbsp;
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                                &nbsp;
                        </div>
                        <div className="col-md-8">
                        <div className="row">
                        
                    </div>
                    <div className="row p2">
                        <div className="pw">
                            
                            <a className="title-p2" href="/">
                            Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title-3">
                            
                            <h3 className="title-p2">
                            Copyright © 2019 RMIT University
Disclaimer Privacy Accessibility Website Feedback
ABN 49 781 030 034 CRICOS provider number: 00122A                             </h3>
                        </div>
                    </div>


                        </div>
                        <div className="col-md-2">
                            &nbsp;
                        </div>
                    </div>
                    
            </div>

        )
    }
}