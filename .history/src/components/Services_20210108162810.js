import React, { Component } from 'react'
import { FaGolfBall } from 'react-icons/fa'
import Title from "./Title"
import 

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaGolfBall />,
                title: "Driving Range",
                info: "Driving range in Derby with 25 bays, multiple tees etc"
            }
        ]
    }
    render() {
        return (
            <div>
                <Title title="services" />
            </div>
        )
    }
}
