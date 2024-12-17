import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function createProjects() {
  try {
    const project = await prisma.project.create({
      data: {
        name: "Pended",
        short_desc: "A credit management system for small businesses.",
        description:
          "Pended is a credit management system designed to simplify the way small businesses manage their transactions. With Pended, shopkeepers can create customer profiles, track pending and received payments, and calculate balances automatically. The platform supports uploading customer images and attaching relevant project images to make records visually intuitive. It also includes advanced security features such as two-factor authentication and email verification for account protection. Shopkeepers can rely on automated amount calculations, ensuring no manual errors in payment records. Pended makes it easier to manage customer relationships and maintain accurate credit records.",
        image: "pended-app.png",
        created_by: "Sakib Ansari",
        live: "https://pend.onrender.com",
        github: "https://github.com/sakibansari546/.PEND",
        technology: {
          create: {
            backend: [
              "Node.js - For building the server-side logic.",
              "Express.js - To create and manage APIs efficiently.",
              "MongoDB - To securely store customer and transaction data.",
              "Math.js - For precise financial and mathematical calculations.",
              "JWT - To manage user authentication securely.",
              "Bcrypt - For encrypting sensitive user passwords.",
              "Nodemailer - For email verification and notifications.",
            ],
            frontend: [
              "React.js - To build a responsive and user-friendly UI.",
              "Tailwind CSS - For a sleek and modern design.",
              "ShadCN UI - To use pre-designed, consistent UI components.",
              "Redux Toolkit - For managing state efficiently.",
              "React Hook Form - For easy and error-free form handling.",
              "Framer Motion - For creating smooth animations.",
              "Axios - To communicate seamlessly with the backend.",
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
