import React from 'react'
import { projects } from '../constants'
import { github } from '../assets'

const ProjectCard = ({ project }) => (
  <div className='relative'>
    <img src={project.image} alt='' className='h-32 w-full' />
    <h1>{project.name}</h1>
    <p>{project.description}</p>
    <div
      onClick={() => window.open(project.source_code_link, '_blank')}
      className='github-icon cursor-pointer relative bottom-32'
    >
      <img
        src={github}
        alt=''
        className='h-8 w-8 bg-black rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
      />
    </div>
    <div
      onClick={() => window.open(project.web_url, '_blank')}
      className='eye-icon cursor-pointer relative bottom-40 left-56'
    >
      <img
        src='https://cdn-icons-png.flaticon.com/512/2874/2874780.png'
        alt='eye'
        className='p-1 h-8 w-8 bg-white border-4 border-black rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
      />
    </div>
  </div>
)

const Projects = () => {
  return (
    <div id='projects' className='flex ml-24 flex-col gap-8 mt-[250px]'>
      <h1 className='font-bold text-4xl font-serif'>Projects</h1>
      <div className='flex gap-3 relative'>
        {projects.map((project, index) => (
          <div
            className='border border-gray-200 w-[300px] h-[320px] p-5 b shadow-lg rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            key={index}
          >
            <div className='project-card' onMouseEnter={(e) => {
              e.currentTarget.querySelector('.github-icon').style.display = 'block';
              e.currentTarget.querySelector('.eye-icon').style.display = 'block';
            }} onMouseLeave={(e) => {
              e.currentTarget.querySelector('.github-icon').style.display = 'none';
              e.currentTarget.querySelector('.eye-icon').style.display = 'none';
            }}>
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
