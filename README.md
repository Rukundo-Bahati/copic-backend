<h1>COPIC</h1>
<p>Copic backend is the server-side application for Copic, a social media platform tailored specifically for photographers and their admirers.</p>
<p>Photographers can showcase their portfolios, share their work, and connect with potential clients interested in hiring them. </p>
<p>This backend handles all the critical functions such as user authentication, post management, and messaging between photographers and clients.</p>

<h2>Features</h2>
User Authentication: Secure sign-up, login, and session management for photographers and clients.
<br>
Photographer Profiles: Photographers can create profiles, showcase portfolios, and update personal information.
<br>
Post Management: Allows photographers to share their work, categorized by themes, styles, or projects.
<br>
Client Interaction: Clients can browse posts, view photographer profiles, and directly message photographers.
<br>
Job Management: Supports inquiries and job-related messaging between clients and photographers.
<br>


<h2>API Endpoints</h2>
<h3>Authentication</h3>
POST /api/auth/signup - Register a new photographer or client.
POST /api/auth/login - Login for photographers and clients.
Photographer Profile
GET /api/photographers/:id - Retrieve a photographer's profile.
PUT /api/photographers/:id - Update a photographer's profile.
<h3>Post Management</h3> 
<p>POST /api/posts - Create a new post.</p>
<p>GET /api/posts - List all posts.</p>
GET /api/posts/:id - Get details of a specific post.
<h3>Messaging</h3>
POST /api/messages - Send a message between clients and photographers.
GET /api/messages/:conversationId - Retrieve all messages in a conversation.
<h3>Technologies Used</h3> 
Node.js: JavaScript runtime for server-side programming.
<br>
Express.js: Web application framework for managing API routes.
<br>
MongoDB: Database for storing user profiles, posts, and messages.
<br>
JWT: Authentication via JSON Web Tokens for secure access control.
<br>
<h3>Contributing</h3>
Fork the repository.
<p>Create a new branch for your feature (git checkout -b feature/YourFeature).</p>
<p>Commit your changes (git commit -m 'Add a new feature').</p>
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
