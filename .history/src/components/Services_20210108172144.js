import React, { Component } from 'react'
import { FaGolfBall, FaStoreAlt } from 'react-icons/fa'
import golfclub from '../images/golf-club.svg'
import Title from "./Title"


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaGolfBall />,
                title: "Driving Range",
                info: "Driving range in Derby with 25 bays, multiple tees etc"
            },
            {
                icon: <FaStoreAlt />,
                title: "Golf Shop",
                info: "Fully stocked pro shop with all kinds of stuff etc"
            },
            {
                icon: <img src={golfclub} alt="Club Services"/>,
                title: "Club Services",
                info: "Driving range in Derby with 25 bays, multiple tees etc"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index => {
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}></h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section >
        )
    }
}
