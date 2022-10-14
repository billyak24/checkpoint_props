import React from 'react'
import PropTypes from "prop-types";

const profile = (props) => {
  return (
    <div>
     
    <div id="sec1">
    <div>
        <h2>{props.name}</h2>
        <h6>{props.profession}</h6> <br/>
        <p>{props.bio1}</p>
    </div>
    <div>
    <img src= {props.src} alt='img' id='ph'/>       {props.children}
    </div>
    </div>
    <script>
        function handleName() {
            alert(`Welcome ${props.name} `)
        }
    </script>

    </div>
  )
}
profile.defaultProps = {
    name: "anonymous",
    profession: "hacker",
    bio1: "TBD"


  }
  profile.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    bio1: PropTypes.string


  }


export default profile