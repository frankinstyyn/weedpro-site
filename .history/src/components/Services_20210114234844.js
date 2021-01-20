import React, { Component } from 'react'
import { ImBubbles4, } from "react-icons/im"
import { TiDeviceDesktop, } from "react-icons/ti"
import { MdSecurity, } from "react-icons/md"
import { GrMoney, } from "react-icons/gr"
import Title from "./Title"
import { Link } from "react-router-dom"


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <ImBubbles4 />,
                title: "Expert Communication",
                info: "Engaging customers in the correct way"
            },
            {
                icon: <MdSecurity />,
                title: "IT Security",
                info: "Proactive security strategy to improve online safety"
            },
            {
                icon: <TiDeviceDesktop />,
                title: "IT Consultancy",
                info: "Strategise and sharpen your IT business"
            },
            {
                icon: <GrMoney />,
                title: "Finances",
                info: "Streamlining business processes ensuring maximum effeciency"
            }
        ]
    };
    render() {
        return (
            <>
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                    </div>
                    <Link to="/nigelservices" className="btn-services">Learn More</Link>
            </section>
            </>
        )
    }
}
