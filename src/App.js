import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import './App.css';
import './piano.css';

function App() {
  useEffect(() => {
    const colorRelation = [ 1, 2 ];
  }, []); //only run once

  return (
    <Container>
      <Router>
        
        {/* -- TITLE -- */}
        <Row>
          Projekt Syntrain använder React
        </Row>

        {/* -- NAVBAR -- */}
        <Row>
          <Col>
            <Link to="/">Hem</Link>
          </Col>
          <Col>
            <Link to="/train">Träna</Link>
          </Col>
          <Col>
            <Link to="/recall">Återkallande</Link>
          </Col>
        </Row>

        {/* -- ROUTED PAGE -- */}
        <Row>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/train">
              <Train />
            </Route>
            <Route path="/recall">
              <Recall />
            </Route>
          </Switch>
        </Row>
      </Router>
    </Container>
  );
}

function Home(){
  return(
    <Container>
      <Row>
        <Col>
          {/* -- PIANO -- */}
          <PianoKeyset />
        </Col>
      </Row>
      home
    </Container>
  );
}

function PianoKeyset(){
  const [ pianoColorArray, setPianoColorArray ] = useState([{
    backgroundColor: "red"
  },{
    backgroundColor: "blue"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  },{
    backgroundColor: "green"
  }]); //this whole build array will be gone when data import gets here

  return(
    <Container>
      <div className="piano-c" style={pianoColorArray[3]} />
      <div className="piano-d" />
      <div className="piano-e" />
      <div className="piano-f" />
      <div className="piano-g" />
      <div className="piano-a" />
      <div className="piano-b" />
      
      <div className="piano-csharp" />
      <div className="piano-dsharp" />
      <div className="piano-fsharp" />
      <div className="piano-gsharp" />
      <div className="piano-asharp" />
    </Container>
  );
}

function Train(){
  return(
    <Container>
      train
    </Container>
  );
}

function Recall(){
  return(
    <Container>
      recall
    </Container>
  );
}

export default App;
