<h1>Music Managment App - Node JS(Backend)</h1>

<p>This project is a  Backend of a Full Stack Application built using the MERN stack. It allows users to manage song information and view various statistics related to the songs.</p>

<h2>Features</h2>
<ul>
    <li><strong>CRUD Operations:</strong> Create, read, update, and delete songs.</li>
    <li><strong>Statistics:</strong> Provides detailed statistics including:
        <ul>
            <li>Total number of songs, artists, albums, and genres.</li>
            <li>Number of songs in each genre.</li>
            <li>Number of songs and albums each artist has.</li>
            <li>Number of songs in each album.</li>
        </ul>
    </li>
    <li><strong>Real-time Updates:</strong> The frontend automatically updates the song list and statistics without reloading the page.</li>
    <li><strong>Filtering:</strong> Filter songs by genre, Artist and Album.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>ExpressJS:</strong> Handles HTTP requests.</li>
    <li><strong>MongoDB:</strong> Database for storing song data.</li>
    <li><strong>Mongoose:</strong> Interacts with MongoDB, models data, and creates schemas.</li>
    <li><strong>Docker:</strong> Packages the backend using Docker.</li>
</ul>



<h2>Setup and Installation</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js</li>
    <li>Docker (for backend)</li>
</ul>
<ol>
    <li>Clone the repository.</li>
    <li>Navigate to the <code>backend</code> folder.</li>
    <li>Build the Docker image:
        <pre><code>docker-compose up</code></pre>
    </li>
   <li>Run it on localhost:
        <pre><code>npm start</code></pre>
    </li>
    <li>The backend API will be available at <code>http://localhost:3001/</code>.</li>
</ol>

<h2>Live Link</h2>
<ul>
    <li><strong>Backend API:</strong> <a href="https://addis-music-beki.onrender.com/api/songs">Backend on Render</a></li>
</ul>
