import React from 'react';
import './HomePage.scss';
import Opening from '../../components/Opening/Opening';
import ProfessionalProjects from '../../components/professionalprojects/ProfessionalProjects';
import PersonalProjects from '../../components/personalprojects/PersonalProjects';
import projectsData from '../../data/projects.json';
import personalData from '../../data/personal.json';

function HomePage () {
    // const firstThree = projectsData.slice(0, 3);
    // const restOf = projectsData.slice(3);

    return(
        <div className='home'>
                <Opening/>
            <div>
                <ProfessionalProjects projects={projectsData}/>
            </div>
            <div>
                <PersonalProjects personal={personalData}/>
            </div>
        </div>
        )
    
}

export default HomePage;