import styled from "styled-components";


function ReloadButton(){

    window.onbeforeunload = function(e) {  
        document.getElementById("reload").className = "out";
    };

    return <Component>
        <img className="reloadButton" src="https://bassets.github.io/reload.svg" onClick={()=>{window.location.href=window.location.href}} />
    </Component>
}

export default ReloadButton;


const Component = styled.div`
 .reloadButton {
    padding: 5px;
    width: 30px;
    height: 30px;
    background: whitesmoke;
    border-radius: 30px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.06);
    opacity: 80%;
    transform: translateY(3px) rotate(-360deg);

    cursor: pointer;
    transition: 0.2s ease;
    animation: in 0.2s ease;    
    &.out {
      transform: translateY(3px) rotate(181deg);
      box-shadow: none;
    }
    &:not(.out):hover {
      opacity: 100;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.06);
      transform: rotate(-10deg);
    }
  }

@keyframes in {
  from {
    box-shadow: none;
    transform: translateY(3px) rotate(-181deg);
  }
}
`;