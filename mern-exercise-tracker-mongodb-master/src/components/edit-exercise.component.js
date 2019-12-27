import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeUserid = this.onChangeUserid.bind(this);
    this.onChangeUseryear = this.onChangeUseryear.bind(this);
    this.onChangeCoursename = this.onChangeCoursename.bind(this);
    this.onChangeCourseid = this.onChangeCourseid.bind(this);
    this.onChangeSemester = this.onChangeSemester.bind(this);
    this.onChangeAssignment = this.onChangeAssignment.bind(this);
    this.onChangeTechnologyuse = this.onChangeTechnologyuse.bind(this);
    this.onChangeIndustry = this.onChangeIndustry.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      userid:'',
      useryear:'',
      coursename:'',
      courseid:'',
      semester:'',
      assignment:'',
      technologyuse:'',
      industry:'',
      photo:'',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          userid: response.data.userid,
          useryear: response.data.useryear,
          coursename: response.data.coursename,
          courseid: response.data.courseid,
          semester: response.data.semester,
          assignment: response.data.assignment,
          technologyuse: response.data.technologyuse,
          industry: response.data.industry,
          photo: response.data.photo,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangeUserid(e) {
    this.setState({
      userid: e.target.value
    })
  }
  onChangeUseryear(e) {
    this.setState({
      useryear: e.target.value
    })
  }
  onChangeCoursename(e) {
    this.setState({
      coursename: e.target.value
    })
  }
  onChangeCourseid(e) {
    this.setState({
      courseid: e.target.value
    })
  }
  onChangeSemester(e) {
    this.setState({
      semester: e.target.value
    })
  }
  onChangeAssignment(e) {
    this.setState({
      assignment: e.target.value
    })
  }
  onChangeTechnologyuse(e) {
    this.setState({
      technologyuse: e.target.value
    })
  }
  onChangeIndustry(e) {
    this.setState({
      industry: e.target.value
    })
  }
  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      userid: this.state.userid,
      useryear: this.state.useryear,
      coursename: this.state.coursename,
      courseid: this.state.courseid,
      semester: this.state.semester,
      assignment: this.state.assignment,
      technologyuse:this.state.technologyuse,
      industry:this.state.industry,
      photo : this.state.photo,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>User id </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.userid}
              onChange={this.onChangeUserid}
              />
        </div>
        <div className="form-group"> 
          <label>User year </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.useryear}
              onChange={this.onChangeUseryear}
              />
        </div>
        <div className="form-group"> 
          <label>Course Name </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.coursename}
              onChange={this.onChangeCoursename}
              />
        </div>
        <div className="form-group"> 
          <label>Course id </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.courseid}
              onChange={this.onChangeCourseid}
              />
        </div>
        <div className="form-group"> 
          <label>Semester </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.semester}
              onChange={this.onChangeSemester}
              />
        </div>
        <div className="form-group"> 
          <label>Assignment: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.assignment}
              onChange={this.onChangeAssignment}
              />
        </div>
        <div className="form-group"> 
          <label>Technology Used: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.technologyuse}
              onChange={this.onChangeTechnologyuse}
              />
        </div>
        <div className="form-group"> 
          <label>Industry: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.industry}
              onChange={this.onChangeIndustry}
              />
        </div>
        <div className="form-group"> 
          <label>Photo: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.photo}
              onChange={this.onChangePhoto}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}