import ReactDOM from "react-dom";

const PortalComponent = () =>{
    return ReactDOM.createPortal(
    <h1>
        This is portal element
    </h1>,document.getElementById('root-portal')
    )
    
}

export default PortalComponent;