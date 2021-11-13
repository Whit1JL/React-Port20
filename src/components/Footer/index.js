import React from 'react';

function Footer() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/Whit1JL"
        },

        {
            name: "fab fa-linkedin",
            link: "www.linkedin.com/in/jessica-white77"
        },
    ]

    return (
        <section>
            <footer className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        {icons.map(icon =>
                        (
                            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                        )
                        )}
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
