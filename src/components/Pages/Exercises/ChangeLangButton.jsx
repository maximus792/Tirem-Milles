import styled from "styled-components";

function ChangeLangButton({language}){
    console.log(window.location.href);
    console.log("LANG",language);
    
    function changeLanguage(){
        if (language == "cat")
            window.location.href = window.location.href.replace("cat", "cast")
        else
            window.location.href = window.location.href.replace("cast", "cat")
           
    }

    return (
        <Component>
            <div className="check-box">
                <input type="checkbox" defaultChecked={language=="cat"} onClick={changeLanguage}/>
            </div>   
        </Component>
    );
}

export default ChangeLangButton;


const Component = styled.div`
    transform: scale(0.5);
    .check-box {
        transform: scale(2);
    }

    input[type="checkbox"] {
        position: relative;
        appearance: none;
        width: 50px;
        height: 25px;
        background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Simplified_Flag_of_Spain_%28civil_variant%29.svg/2560px-Simplified_Flag_of_Spain_%28civil_variant%29.svg.png");
        border-radius: 50px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 0.4s;
        background-size: 2.3rem;

    }

    input:checked[type="checkbox"] {
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/1280px-Flag_of_Catalonia.svg.png");
    }

    input[type="checkbox"]::after {
        position: absolute;
        content: "";
        width: 25px;
        height: 25px;
        top: 0;
        left: 0;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
        transition: 0.4s;
    }

    input:checked[type="checkbox"]::after {
        left: 50%;
    }
`;