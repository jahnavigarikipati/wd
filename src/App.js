import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import RecommendationSection from "./components/RecommendationSection";
import SkillSection from "./components/SkillSection";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import HomePage from "./components/HomePage";
import AddProject from "./components/AddProject";
import {Provider} from "./components/context";
function App() {
  return(
  <Provider>
  <BrowserRouter>
  {/*if we write not found at first it will be applied to all pages*/}
    <Navbar />
    <Switch>
      <Route exact path="/">
    <Title name="Garikipati Jahnavi" leadText="I am a freelancer developer"/>
    <RecommendationSection />
    <SkillSection />
    <Projects />
    <About />
    <Blogs />
    </Route>

    <Route 
    exact 
    path="/contact" 
    component={Contact}/>
    
    <Route 
    exact 
    path="/write-a-recommendation" 
    component={WriteRecommendation}
    />
    <Route exact path="/project/add" component={AddProject}/>
    <Route exact path="/project/:id" component ={ProjectPage} />
    <Route exact path="/blog/:id" component ={BlogPage} />

    <Route component={NotFound}/>
    </Switch>
    <Footer />
  </BrowserRouter>
  </Provider>
  );
  
};
export default App;