import React, { Component } from 'react'
import { FaGolfBall, FaStoreAlt } from 'react-icons/fa'
import { GoPerson } from "react-icons/go";
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
                icon: <img src={golfclub} className="servicesImg" alt="Club Services"/>,
                title: "Club Services",
                info: "Club regripping etc"
            },
            {
                icon: <GoPerson />,
                title: "PGA Pro Lessons",
                info: "Sharpen your golf game with a lesson from our PGA professional, Dan Delaney"
            },
            {
                icon: <FaStoreAlt />,
                title: "Golf Shop",
                info: "Fully stocked pro shop with all kinds of stuff etc"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                <Link to="/nigelservices" className="btn-primary">Learn More</Link>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
