# YouTube Comment Analyzer

This is a web application that allows you to analyze the sentiment of comments on YouTube videos. It provides a detailed analysis of the emotions expressed in the comments, as well as a timeline of when the comments were posted.

## Features

- Analyze the sentiment of comments on any YouTube video.
- View a detailed breakdown of the emotions expressed in the comments.
- See a timeline of when the comments were posted.
- View the top comment for the video.
- Responsive design that works on all devices.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and static web applications.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building custom designs.
  - [Chart.js](https://www.chartjs.org/) - A JavaScript library for creating interactive charts.
  - [@tremor/react](https://www.tremor.so/) - A React library for building dashboards.
- **Backend:**
  - [FastAPI](https://fastapi.tiangolo.com/) - A modern, fast (high-performance), web framework for building APIs with Python 3.7+.
  - [Pydantic](https://pydantic-docs.helpmanual.io/) - A data validation and settings management using python type annotations.
  - [Uvicorn](https://www.uvicorn.org/) - A lightning-fast ASGI server implementation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Install the dependencies for the frontend:
   ```bash
   cd client
   npm install
   ```
3. Install the dependencies for the backend:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Deployment

This application can be easily deployed to [Vercel](https://vercel.com/). For more information, see the [Vercel documentation](https://vercel.com/docs).