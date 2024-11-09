import { UserObject } from "@/models/User"
import { Navitems } from "@/models/Header"

export const userinfo: UserObject = {
    name : 'Abdul Rehman',
    picture : '',
    heading: 'Hello! My name is Abdul Rehman, and I am an AI Generative Engineer. I work with advanced technology to create amazing content using artificial intelligence. I am passionate about designing and developing AI systems that generate creative ideas, images, and solutions. With a strong foundation in AI, I aim to make tasks easier and more efficient for businesses. I am excited to explore new opportunities and contribute to innovative projects!',
    about: `
        <p> <b>AI Expertise:</b> I specialize in using artificial intelligence to create innovative solutions, including generating images, content, and ideas to help businesses grow and improve.</p>

        <p><b>Passion for Innovation:</b> I am dedicated to exploring the latest AI trends and technologies, always striving to develop efficient tools that make tasks easier for everyone..</p>

        <p><b>Commitment to Quality</b>: My goal is to deliver high-quality, reliable AI solutions that solve real-world problems, with a focus on simplicity and effectiveness in every project.</p>
        `,
    skills: ['Next JS', 'DSA', 'OOP', 'Python', 'C++', 'TypeScript', 'HTML', 'Tailwind CSS', 'CSS', 'C'],   
}

export const headerItems : Navitems = {
    home : {label : 'Home', page : 'home'},
    about : {label : 'About', page : 'about'},
    project : {label : 'Projects', page : 'projects'}
}

export const projects = {
    gmail: { image: '/library.jpeg', name: 'Library Managment' },
    flipkart: { image: '/game.jpeg', name: 'Adventure Game' },
    google: { image: '/health.jpeg', name: 'Health Reminder System' },
    indeed: { image: '/food.jpeg', name: 'Movie Ticket and Food Ordering' },
    crud: { image: '/students.jpeg', name: 'Student Meeting' },
    aws: { image: '/time.jpeg', name: 'CountDown Timer' },
};