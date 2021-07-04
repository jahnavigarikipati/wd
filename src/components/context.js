import React , {Component} from "react";

const Context = React.createContext();

export class Provider extends Component {
    state={
        projects:[
            {
                id:1,
                title: "Project 1",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                excerpt: "This is my project about...",
            },
            {
                id:2,
                title: "Project 2",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                excerpt:"This is my project about...",
            },
            {
                id:3,
                title:"Project 3",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
                excerpt: "This is my project about...",
            },
        ],
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }

}
