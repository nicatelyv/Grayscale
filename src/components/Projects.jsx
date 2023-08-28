import React from 'react'
import "./style.scss"

function Projects() {
    return (
        <section id='projects' className='projects'>
            <div className='container'>
                <div className='shoreline'>
                    <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/bg-masthead.jpg" alt="" />
                    <div className='text'>
                        <h5>Shoreline</h5>
                        <p>Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                    </div>
                </div>
                <div className='mistyandmountains'>
                    <div className="misty">
                        <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/demo-image-01.jpg" alt="" />
                        <div>
                            <h2>Misty</h2>
                            <p>An example of where you can put an image of a project, or anything else, along with a description.</p>
                        </div>
                    </div>
                    <div className="mountains">
                        <div>
                            <h2>Mountains</h2>
                            <p>Another example of a project with its respective description. These sections work well responsively as well!</p>
                        </div>
                        <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/demo-image-02.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects