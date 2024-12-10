import "./MiOrg.css"


const MiOrg = (props) => {



    return <section className="orgs">
        <div className="orgs-header">
            <h1>Mi organización</h1>
            <img src="./img/add.png" alt="add" onClick={props.changeShow}></img>
        </div>
        
    </section>
}


export default MiOrg