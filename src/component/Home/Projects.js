import React from 'react';
import project1 from '../../img/project1.png'
import project2 from '../../img/project2.png'
import project3 from '../../img/project3.png'

const Projects = () => {
    return (
        <div className='px-5 pt-28'>
            <div className="flex justify-center items-center ">
                <h1 className="text-center text-2xl text-primary  ">My Projects</h1>
                <span className='underline '></span>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 mt-8'>
                <div class="card w-72  shadow-xl ">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title ">
                            Tools Place !
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <a href="https://tools-place.web.app/" className='custom-btn2 text-center'>view site</a>
                        <a href="#" className='custom-btn2 text-center'>Site Details</a>
                        
                    </div>
                </div>
                <div class="card w-72  shadow-xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title ">
                            Grocery Store
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <a href="https://omega-grocery.web.app/" className='custom-btn2 text-center'>view site</a>
                        <a href="#" className='custom-btn2 text-center'>Site Details</a>
                        
                    </div>
                </div>
                <div class="card w-72  shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title ">
                            Fitness Trainer
                           
                        </h2>
                        <a href="https://fitcoach.netlify.app/" className='custom-btn2 text-center'>view site</a>
                        <a href="#" className='custom-btn2 text-center'>Site Details</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;