# MoviesLib - React Movie Database App

MoviesLib is a React application that allows users to browse and search for movies. It fetches data from a movie database API to provide information about top-rated movies and specific movie details.

## Features

-   **Browse Top-Rated Movies:** View a list of popular movies.
-   **Search Movies:** Search for movies by title.
-   **Movie Details:** View detailed information about a specific movie, including:
    -   Release date
    -   Genres
    -   Status
    -   Production countries
    -   Spoken languages
    -   Budget
    -   Revenue
    -   Runtime
    -   Overview
-   **Responsive Design:** The application is designed to work on various screen sizes.

## Technologies Used

-   React
-   React Router DOM
-   React Icons
-   CSS

## Getting Started

### Prerequisites

-   Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Create a `.env.local` file in the root directory and add your API keys:

    ```
    VITE_API=<your_api_base_url>
    VITE_API_KEY=<your_api_key>
    VITE_SEARCH=<your_api_search_url>
    VITE_IMG=<your_image_base_url>
    ```

    Replace `<your_api_base_url>`, `<your_api_key>`, `<your_api_search_url>` and `<your_image_base_url>` with the actual values from your movie database API.

### Running the Application

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:5173`.

## Project Structure
-   `components`: Reusable UI components.
-   `pages`: Components representing different pages.
-   `services`: API fetching logic.
-   `utils`: Utility functions (e.g., currency formatting).
-   `App.jsx`: Main application component with routing.
-   `index.js`: Entry point of the application.
-   `index.css`: Global styles.

## API Usage

The application uses a movie database API to fetch movie data. Ensure you have a valid API key and that the API endpoints are correctly configured in your `.env.local` file.

## Styling

The application uses CSS for styling. Global styles are defined in `index.css`, and component-specific styles are defined in separate CSS files within the respective component directories.

## Routing

React Router DOM is used for routing. The application has the following routes:

-   `/`: Home page (top-rated movies).
-   `/movie/:id`: Movie details page.
-   `/search?q=query`: Search results page.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.