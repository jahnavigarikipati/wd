import React from 'react'
import RecommendationCard from "./RecommendationCard";
import {v4 as uuid} from "uuid";
function RecommendationSection() {
    const recommendations=[
        {
            id:1,
            name:"Random guy 1",
            company:"ABC company",
            designation:"CEO",
            message:"He is a good engineer",
        },
        {
            id:2,
            name:"Random guy 2",
            company:"ABC company",
            designation:"Director",
            message:"He is a better engineer",
        },
        {
            id:3,
            name:"Random guy 3",
            company:"ABC company",
            designation:"Manager",
            message:"He is a best engineer",
        },
        {
            id:4,
            name:"Random guy 4",
            company:"ABC company",
            designation:"SDE",
            message:"He is a average engineer",
        },
    ]
    return (
<div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
        {recommendations.map((recommendation)=>(
            <RecommendationCard key={uuid()} recommendation={recommendation}/>
        ))}
      </div>
      </div>
    )
}
export default RecommendationSection;
