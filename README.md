Welcome to `MyTube`, an open-source YouTube replica that aims to give
developers a chance to understand the workings of a video-sharing
platform. Here you will find setup instructions, necessary scripts,
environment setup information, and a brief overview of the app’s flow.

# Requirements

- Node.js (v14+)

- MongoDB

- Git

# Setting Up

1.  **Clone the Repository**:

        git clone https://github.com/your_username/mytube.git

2.  **Navigate to Project Directory**:

        cd mytube

3.  **Install Dependencies**: Using npm:

        npm install

    Or using yarn:

        yarn

4.  **Start Local Server**:

        npm start

    Or with yarn:

        yarn start

# Environment Variables

For the application to work correctly, make sure you set up the
following environment variables:

    DB_URL=mongodb://localhost:27017/mytube   # Your MongoDB URL
    PORT=3000                                 # The port on which the server runs
    SECRET_KEY=your_secret_key                # Secret key for JWT tokens

Store these in a `.env` file in the root of your project.

# App Flow

1.  **User Registration & Authentication**:

    - Users can register and log in using email and password.

    - Authentication is handled using JWT tokens.

2.  **Video Uploads**:

    - Registered users can upload videos.

    - Videos are stored using an external storage solution (e.g., AWS
      S3).

3.  **Video Playback**:

    - Videos can be played back in a dedicated video player.

    - Users can also like, dislike, and comment on videos.

4.  **Search & Recommendations**:

    - Users can search for videos using keywords.

    - The home page provides video recommendations based on watch
      history.

# Scripts

- **Start the Development Server**:

      npm run dev

- **Run Production Build**:

      npm run build

- **Linting**: Check for linting errors with:

      npm run lint

# Contributing

We welcome contributions from everyone. If you’ve got any suggestions,
ideas, or bugs to report, please [open a new
issue](https://github.com/your_username/mytube/issues/new).

# License

This project is licensed under the MIT License. For more details, see
the [LICENSE](LICENSE) file in the project root.

Happy coding! 🚀
