// https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_getting_to_know_Redux_actions
import React, { Component } from 'react';

class MainApp extends Component {
    constructor() {
        super();

        this.state = {
            articles: [
                {
                    title: "Redux tutorial for beginners",
                    id: 1
                },
                {
                    title: "Redux tutorial for beginners 2",
                    id: 2
                }
            ]
        };
    }
    
    render() {

        const { articles } = this.state;

        return (
            <div>
                return 
                    <ul>
                        {
                            articles.map( article => {
                                <li key={article.id}>
                                    {article.title}
                                </li>
                            })
                        }
                    </ul>
            </div>
        )
    }
}