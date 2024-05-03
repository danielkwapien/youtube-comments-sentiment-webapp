# YouTube Comment Sentiment Analyzer

This project provides a versatile platform to analyze the sentiment expressed in YouTube comments and understand how viewers feel about the content.

## Techstack

* **Next.js** frontend: Responsive and user-friendly interface.
* **FastAPI** backend: Efficient sentiment analysis powered by data preprocessing and  Hugging Face transformers.
* **roBERTa** model: Robust pre-trained language model for accurate sentiment classification.
* **Tailwind CSS**: Streamlined styling and customization.
* **UI components**: [Aceternity UI](https://ui.aceternity.com/), [Shadcn UI](https://ui.shadcn.com/), [Tremor](https://www.tremor.so/)


## How it Works
The Python/FastAPI server is mapped into to Next.js app under /api/.

This is implemented using next.config.js rewrites to map any request to /api/:path* to the FastAPI API, which is hosted in the /api folder.

On localhost, the rewrite will be made to the 127.0.0.1:8000 port, which is where the FastAPI server is running.

## Getting Started

1. Clone this repository
 
```bash
git clone https://github.com/danielkwapien/youtube-comments-sentiment-webapp
cd youtube-comments-sentiment-webapp
```

2. Install the dependencies
   
```bash
npm install
# or
yarn
# or
pnpm install
```
3. Run the development server

Run the fronted and the backend:
```bash
npm run dev
```
---
Run just the backend:
```bash
npm run fastapi-dev
```

Run just the frontend:
```bash
npm run next-dev 
```
