import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../css/App.css';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Route, Link } from 'react-router-dom';

import Helmet from 'react-helmet';

function App() {
  return (
    <main className="page bg-white" id="petratings">
    	<div className="App">
			<Helmet bodyAttributes={{style: 'background-color : #f8f5f2'}}/>
        		<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/About" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />	
      	</div>
	</main>
  );
}

export default App;
