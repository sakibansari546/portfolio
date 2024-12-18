import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function createProjects() {
  try {
    const project = await prisma.project.create({
      data: {
        name: "Chatify",
        short_desc:
          "A real-time chat application to connect with friends and colleagues.",
        description:
          "Chatify is a feature-rich real-time chat application that enables users to exchange messages instantly. Users can create personal accounts, securely authenticate with JWT, and upload profile pictures using Cloudinary. The app supports both one-on-one and group conversations, with real-time updates powered by Socket.IO. Chatify ensures a responsive and smooth user experience with its modern UI, built using Tailwind CSS and Daisy UI. The app is designed to prioritize both performance and security, offering features like password encryption with bcrypt and real-time image sharing.",
        image:
          "https://res.cloudinary.com/dpcwzoeu4/image/upload/v1734512694/portfolio/projects/mjdfqnidxflr5mzwe2im.png",
        live: "https://chatify-97hn.onrender.com/",
        github: "https://github.com/sakibansari546/Chatify",
        created_by: "Sakib Ansari",
        technology: {
          create: {
            backend: [
              "Express.js - For creating REST APIs and handling server-side logic.",
              "Socket.IO - For enabling real-time communication between users.",
              "MongoDB - For storing user data and chat messages.",
              "JWT - For secure user authentication.",
              "Cloudinary - For managing media uploads like profile pictures.",
              "Bcrypt - For encrypting user passwords and ensuring data security.",
            ],
            frontend: [
              "React.js - For building dynamic and responsive UI components.",
              "Daisy UI - For easily implementing elegant, pre-designed UI components.",
              "Tailwind CSS - For designing a custom, modern, and fully responsive interface.",
              "Redux Toolkit - For managing global state efficiently.",
              "React Hook Form - For building and validating forms with simplicity.",
              "React Router DOM - For seamless navigation and route management.",
              "Axios - For handling API requests and managing client-server communication.",
            ],
          },
        },
      },
    });
    console.log(project);
  } catch (error) {
    console.log(error);
  }
}

// Uncomment to run the function and add the project to your database
// Promise.resolve(createProjects()).catch((error) => {
//   console.log(error);
// });
