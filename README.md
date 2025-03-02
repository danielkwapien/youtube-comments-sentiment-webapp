# YouTube Comment Sentiment Analyzer

This project provides a versatile platform to analyze the sentiment expressed in YouTube comments and understand how viewers feel about the content.

## Techstack

*   **Next.js** frontend:  A React framework for building user interfaces.  Leveraged for:
    *   **Component-based architecture:**  For building reusable UI elements and a modular frontend structure.
    *   **Server-Side Rendering (SSR):**  For improved performance and SEO (though less critical for this dashboard, but good practice).
    *   **Frontend Routing:**  For managing navigation within the dashboard application.
    *   **UI Components Libraries:**  Integration with [Aceternity UI](https://ui.aceternity.com/), [Shadcn UI](https://ui.shadcn.com/), and [Tremor](https://www.tremor.so/) for pre-built, styled components, accelerating development and ensuring a consistent UI.  Tremor specifically used for real-time charts.
    *   **Tailwind CSS:**  For utility-first CSS styling, enabling rapid and consistent styling across components.

*   **FastAPI** backend: A modern, fast (high-performance), web framework for building APIs with Python 3.7+.  Chosen for:
    *   **Asynchronous capabilities:**  For handling concurrent requests efficiently, crucial for real-time data processing.
    *   **Pydantic data validation:**  For automatic data validation and serialization, ensuring API robustness and data integrity.
    *   **OpenAPI and Swagger UI:**  Automatic generation of API documentation, improving API discoverability and developer experience.
    *   **Python ecosystem:**  Leveraging Python's rich ecosystem for NLP and machine learning libraries.

*   **roBERTa** model:  A Robustly Optimized BERT Pretraining Approach.  A state-of-the-art pre-trained language model from Hugging Face Transformers, used for:
    *   **Sentiment Classification:**  Accurately classifying the sentiment (positive, negative, neutral) of YouTube comments.
    *   **Transformer Architecture:**  Leveraging the transformer network architecture, known for its effectiveness in NLP tasks.
    *   **Transfer Learning:**  Utilizing a pre-trained model and fine-tuning it for the specific task of YouTube comment sentiment analysis, saving training time and improving performance.

*   **YouTube Data API v3:**  Google's official API for accessing YouTube data, used for:
    *   **Comment Retrieval:**  Fetching comments from YouTube videos in real-time.
    *   **Data Ingestion:**  Providing the data source for the sentiment analysis pipeline.
    *   **API Key Authentication:**  Requiring a valid YouTube Data API v3 key for accessing the API.

*   **Other Libraries:**
    *   `google-api-python-client`: Python library for interacting with Google APIs (specifically YouTube Data API).
    *   NLP libraries (spaCy, NLTK):  For text preprocessing tasks (tokenization, stemming, etc.).
    *   Potentially other Python libraries for ML (scikit-learn, torch, transformers).


## How it Works

The YouTube Comment Sentiment Analyzer works as follows:

1.  **Frontend (Next.js) User Interface:**  The user interacts with the Next.js frontend in their web browser.  They can input a YouTube video ID.
2.  **Frontend API Request:**  The frontend sends an API request to the backend (FastAPI) to analyze comments for the specified video ID.  This request is routed to the FastAPI backend via Next.js rewrites configured in `next.config.js`.
3.  **Backend (FastAPI) API Endpoint:**  The FastAPI backend receives the API request.
4.  **YouTube Data API Interaction:**  The FastAPI backend uses the YouTube Data API v3 (authenticated with the `YOUTUBE_API_KEY` environment variable) to fetch comments for the requested YouTube video ID.
5.  **Sentiment Analysis (roBERTa):**  The backend processes the retrieved comments using the pre-trained roBERTa model.  roBERTa analyzes the text of each comment and predicts its sentiment (positive, negative, or neutral).
6.  **Data Aggregation and Response:**  The backend aggregates the sentiment analysis results (e.g., counts of positive, negative, neutral comments, average sentiment score).  It then sends a JSON response back to the frontend containing the analysis results.
7.  **Frontend Visualization:**  The Next.js frontend receives the JSON response and uses libraries like Tremor and Chart.js to visualize the sentiment data in real-time charts and graphs, displaying the overall sentiment trend for the YouTube video's comments.

**(Optional Text Diagram):**

```
+------------------+     API Request      +---------------------+      YouTube Data API     +----------------------+
|  Next.js Frontend  |--------------------->|   FastAPI Backend   |------------------------->|  YouTube API (v3)    |
| (User Interface)   |                      | (Sentiment Analysis) |<-------------------------| (Comment Retrieval)  |
+------------------+<---------------------| (Data Processing)   |      API Response      +----------------------+
                         |      API Response      +---------------------+
                         +----------------------->|  Next.js Frontend  |
                                                 | (Visualization)     |
                                                 +------------------+
```

## Getting Started

This project requires both a frontend (Next.js) and a backend (FastAPI) to be run simultaneously.  Please follow these steps to get the project running locally:

**Prerequisites:**

*   **Node.js and npm (or yarn/pnpm):**  Ensure you have Node.js and npm (or your preferred Node.js package manager) installed for running the frontend.
*   **Python 3.7+:** Python 3.7 or higher is required for the FastAPI backend.  It is recommended to use a virtual environment to manage Python dependencies.
*   **YouTube Data API v3 Key:**  You will need a Google API key with the YouTube Data API v3 enabled.  See the [official Google documentation](https://developers.google.com/youtube/v3/getting-started) for instructions on how to create a project and obtain an API key.

**1. Clone this repository:**

```bash
git clone https://github.com/danielkwapien/youtube-comments-sentiment-webapp
cd youtube-comments-sentiment-webapp
```

**2. Backend Setup (FastAPI):**

*   Navigate to the `api` directory:
    ```bash
    cd api
    ```
*   Create a Python virtual environment (recommended):
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Linux/macOS
    venv\Scripts\activate  # On Windows
    ```
*   Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
*   Set up environment variables:
    *   Create a `.env` file in the `api` directory.
    *   Add the following line to your `.env` file, replacing `YOUR_YOUTUBE_API_KEY` with your actual YouTube Data API v3 key:
        ```
        YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
        ```

**3. Frontend Setup (Next.js):**

*   Navigate back to the project root directory:
    ```bash
    cd ..
    ```
*   Install Node.js dependencies:
    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    ```
*   Set up environment variables (if needed - check codebase):
    *   If the frontend requires environment variables (e.g., for API endpoints), create a `.env.local` file in the project root directory and add necessary variables.  *Based on current understanding, frontend env vars might not be needed, but double-check codebase if unsure.*

**4. Run the development servers:**

*   **Start the FastAPI backend:**  In the `api` directory, run:
    ```bash
    npm run fastapi-dev
    ```
    (or `python api/server.py` if `npm run fastapi-dev` fails - check `package.json` for the exact command)
*   **Start the Next.js frontend:** In the project root directory, run:
    ```bash
    npm run dev
    ```
    (or `npm run next-dev` or `yarn dev` or `pnpm dev` - check `package.json`)

*   **Access the application:**  Open your browser and navigate to `http://localhost:3000` (or the address shown in the terminal when starting the frontend).
