import {ProjectCardData} from "../data/projectCardData";
import {ProjectCard} from "./projectCard";
import React, {FC, useState} from "react";

interface Props {
    data: Array<ProjectCardData>;
}

export const Portfolio: FC<Props> = ({data}) => {
    const [project, setProject] = useState<ProjectCardData>();

    const onCardClick = (data: ProjectCardData) => {
        setProject(data);
    };

    return (
        <div id='portfolio' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h1>My Latest Projects</h1>
                    <p>
                        Below are commercial projects in which I took part as a developer. For details, click "View Details".
                    </p>
                </div>
                <div className='portfolio-items'>
                    <div className="row">
                        {data
                            ? data.map((d, i) => (
                                <div key={d.id} className='col-sm-6 col-md-4 col-lg-4'>
                                    <ProjectCard data={d} onClick={() => onCardClick(d)}/>
                                </div>
                            ))
                            : 'Loading...'
                        }
                    </div>
                </div>
                {project &&
                <div className="portfolio-details">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="portfolio-details-image">
                                <img src={project.largeImage}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <h3>
                                {project.title}
                            </h3>
                            <p dangerouslySetInnerHTML={{__html: project.text}}/>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
