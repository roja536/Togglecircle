import React, { Component } from 'react'
import axios from 'axios';

export default class BasicRead extends Component {
    constructor(props) {
        super(props)

        this.state = {
            student: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/student')
            .then((res) => {
                this.setState({
                    student: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {

        return (
            <div>BasicRead
                <ul>
                    {
                        this.state.student.map((e) => {
                            return (
                                <>
                                    <li>{e.id}</li>
                                    <li>{e.location}</li>
                                    <li>{e.name}</li>
                                    <br>
                                    </br>
                                </>


                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
