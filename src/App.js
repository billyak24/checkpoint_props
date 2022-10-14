import  Profile  from './Profile/Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container , Nav,Form ,Button} from 'react-bootstrap';


function App() {
  const style1 ={color:" #648aaf" , marginLeft : " 60px",marginTop: '20px'}
  const style2 ={color: "#767d83" ,marginTop: '20px'}
  const section={  marginLeft: '7%'}
  return (
    <div>
       <Navbar  variant="dark">
        <Container>
          <Nav className="LOL">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#pricing">Work</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1 style={{color:" #648aaf",marginLeft : " 60px",marginTop: '60px'}}>About Me</h1>
      <hr></hr>
     
    <div >
    <Profile name="AKHAL Bilel" profession="Web Development Student"
    bio1="Full stack developer in GOMYCODE" 
    src='/photo.JPG' ></Profile>
    </div>
   
      <h1 style={style1}>Work </h1>
    <hr></hr>
  

    <div style={section}>
    <h4 style={style2}> Experiences  </h4>
        <li className='hey'>
          worker at Eurl Al Afou El Karim
        </li> 
        <li className='hey'>
             Freelancer 
        </li> 
       
    

        <h4 style={style2}> Associative Life  </h4>
        <li className='hey'>
           Violin player
        </li> 
        <li className='hey'>
            Geologist
        </li> 
        <li className='hey'>
            memeber in geoclub
        </li> 
    </div>
  
    <h1 style={style1}> Resume </h1>
    <hr></hr>

    <div style={section}>
        <h4 style={style2}> Education and Trainings</h4>
        <li className="hey">
             Full-Stack Javascript student in GOMYCODE
        </li> 
        <li className="hey">
            Geologist student in Usthb in algeria        
        </li> 
        
        <h4 style={style2}> Certifications</h4>
        <li className="hey">
            PYTHON
        </li> 
        <li className="hey">
            DATA BASE
        </li> 
        <li className="hey">
            FULL STACK
        </li> 
       
    </div>
    
    <h1 style={style1}> Contact </h1>
    <hr></hr>
    
   
<div style={section}>
        <h4 style={style2}> To Contact Me </h4>
        <li className="hey">
            Email : bilelakhal@gmail.com
        </li>
        <li className="hey">
             Phone : 06 75 04 36 13
        </li>
      
        <h4 style={style2}> To send Me a Direct Message</h4>
      <div id='form'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />
        
      </Form.Group>

      <Form.Group className="hi" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="email" placeholder="write your message" />
      </Form.Group>
   
      <Button className="hey2" variant="primary" type="submit">
        SEND 
      </Button>
    </Form>
    </div>
  </div>
  

  <footer style={{marginTop: '30px'}}>
    <p>copyright © :<b>2022</b></p>

  </footer>
    </div>
  );
}

export default App;
