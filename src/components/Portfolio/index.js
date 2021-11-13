import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'Password-Generator',
            description: 'HTML, CSS, JavaScript',
            link: 'https://whit1jl.github.io/Password-Gen/',
            repo: 'https://github.com/Whit1JL/Password-Gen'
        },
        {
            name: 'Tech-Blog',
            description: 'Sequelize, Node, MySQL',
            link: 'https://safe-refuge-75231.herokuapp.com/',
            repo: 'https://github.com/Whit1JL/Tech-Blog',
        },
        {
            name: 'Prework-About-Me',
            description: 'HTML & CSS',
            link: 'https://whit1jl.github.io/prework-about-me/',
            repo: 'https://github.com/Whit1JL/prework-about-me'
        },
        {
            name: 'Workout-Tracker',
            description: 'JavaScript, CSS, HTML',
            link: 'https://boiling-fjord-77800.herokuapp.com/',
            repo: 'https://github.com/Whit1JL/Workout-Tracker'
        },
        {
            name: 'Plane-With-Plants',
            description: 'HTML, JavaScript, CSS',
            link: 'https://404veggiebusters.github.io/Project1/',
            repo: 'https://github.com/Whit1JL/Project1'
        },
        {
            name: 'Portfolio',
            description: 'HTML & CSS',
            link: 'https://whit1jl.github.io/Portfolio/',
            repo: 'https://github.com/Whit1JL/Portfolio'
        },
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">

                    {projects.map((project, idx) => (
                        <Project
                            project={project}
                            key={"project" + idx}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;