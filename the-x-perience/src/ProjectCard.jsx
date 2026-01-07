import './ProjectCard.css'

export default function ProjectCard(props){
    return(
        <>
        <div className="p-card">
        <img className='p-card-image' src={props.img} />
        
        <h3 className="p-card-heading">
        {props.title}
        </h3> 


        <div className="p-card-description">
        {props.content}
        </div>
        <a className="p-card-link-button" target='_blank' href={props.link} >Visit site</a>
        </div>
        </>
    );

}