type ProjectProps = {
    project: {
        title: string,
        url: string,
        description: string,
        poster: string,
        videoMp4: string,
        tech: string[]
    }
}


const Project = ({ project}: ProjectProps) => {
    return (
        <div>
            <div>⌘</div>
            <a href={project.url} target="_blank" rel="noreferrer">
                <video autoPlay loop muted poster={project.poster}>
                  <source src={project.videoMp4} type="video/mp4" />
                </video>
              </a>
              <div>
              <a href={project.url} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
                <div>
                  {project.tech.map((stack) => (
                    <button key={stack}>{stack}</button>
                  ))}
                </div>
              </div>
        </div>
      )
}

export default Project;
