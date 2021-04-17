import * as React from 'react';
import { Link } from "react-router-dom";

export function Home() {
    
    return (
        <div className="home">
            <div className="homeTitle">
                <h1>DON'T LIMIT YOUR CHALLENGES, CHALLENGE YOUR LIMITS.</h1>
                <h4>- JERRY DUNN</h4>
                <Link className="exploring" to="/about"> Start Exploring </Link>
            </div>
        </div>
        
    );
    
}
