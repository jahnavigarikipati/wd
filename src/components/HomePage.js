import React from 'react'

import Projects from "./Projects";
import Blogs from "./Blogs";
import SkillSection from "./SkillSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";




function HomePage() {
    return (
        <div>
             <Title name="Garikipati Jahnavi" leadText="I am a freelancer developer"/>
             <RecommendationSection />
             <SkillSection />
            <Projects />
            <About />
            <Blogs />
        </div>
    );
}
export default HomePage;
