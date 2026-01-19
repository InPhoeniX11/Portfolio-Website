import pro1 from "../Images/chat-app.png";
import pro2 from "../Images/job-board.png";
import pro3 from "../Images/portfolio.png";

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Chat-App",
    text: "This is a real-time chat application that allows users to communicate instantly in private and group chats. Used Socket.IO to enable real-time communication between users. Messages are emitted as events and stored in MongoDB for chat history. The app supports authentication, private and group chats, and online/offline status tracking using socket connections. If a user reconnects, previous messages are fetched from the database.",
    view: "https://github.com/InPhoeniX11/Chat-App",
  },
  {
    imgsrc: pro2,
    title: "Job Board",
    text: "This a web application where recruiters can create company profiles and post job openings. The system supports authentication, job creation, editing, and storing recruiter contact details.",
    view: "https://github.com/InPhoeniX11/Job-Board",
  },
  {
    imgsrc: pro3,
    title: "Portfolio Website",
    text: "This project is a React-based personal portfolio website created to present my projects and technical skills. It follows a component-based architecture, uses client-side routing for navigation, and focuses on responsive UI design.",
    view: "https://github.com/InPhoeniX11/Portfolio-Website",
  },
];

export default ProjectCardData;
