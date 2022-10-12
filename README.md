<h1>NoSQL: Social Network API</h1>

<h2>Purpose</h2>
<p>The purpose of this challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts and create a friend list. The app uses *Express.js* for routing, a *MongoDB* database and the *Mongoose* ODM.</p>

<h2>User Story</h2>
<p>AS A manager at an internet retail company,</p>
<p>I WANT a back end for my e-commerce website that uses the latest technologies,</p>
<p>SO THAT my company can compete with other e-commerce companies.
</p>

<h2>Acceptance Criteria</h2>
<p>GIVEN a social network API
</p>
<p>WHEN I enter the command to invoke the application
</p>
<p>THEN my server is started and the Mongoose models are synced to the MongoDB database
</p>
<p>WHEN I open API GET routes in Insomnia for users and thoughts</p>
<p>THEN the data for each of these routes is displayed in a formatted JSON
</p>
<p>WHEN I test API POST, PUT, and DELETE routes in Insomnia
</p>
<p>THEN I am able to successfully create, update, and delete users and thoughts in my database
</p>
<p>WHEN I test API POST and DELETE routes in Insomnia
</p>
<p>THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
</p>

<h2>Grading Requirements</h2>
<li>The GitHub repository containing that contains the application code</li>
<li>A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.</li>
<li>The walkthrough video must show all of the technical acceptance criteria being met.</li>
<ul>The walkthrough video must demonstrate how to start the application’s server.</ul>
<ul>The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.</ul>
<ul>The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.</ul>
<ul>The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.</ul>
<ul>Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.</ul>
<ul>Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.</ul>
<li>Technical Acceptance Criteria:</li>
<ul>Satisfies all of the above acceptance criteria, plus</ul>
<ul>Uses the Mongoose package to connect to a MongoDB database.</ul>
<ul>Includes User and Thought models outlined in the Challenge instructions.</ul>
<ul>Includes schema settings for User and Thought models as outlined in the Challenge instructions.</ul>
<ul>Includes Reactions as the `reaction` field's subdocument schema in the Thought model.</ul>
<ul>Uses functionality to format queried timestamps properly.</ul>
<li>Repository has a unique name.</li>
<li>Repository follows best practices for file structure and naming conventions.</li>
<li>Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.</li>
<li>Repository contains multiple descriptive commit messages.</li>
<li>Repository contains a high-quality README with description and a link to a walkthrough video.</li>
<li>Bonus: Application deletes a user's associated thoughts when the user is deleted.</li>

<h2>Screenshots </h2>

<h3>The below screenshot shows the functionality of getting all users:</h3>

![image](https://github.com/tornicke/social-network-api/blob/main/images/Screenshot%20Social%20Network%20API.png)

<h2>Required URLs:</h2>

[Walkthrough Video URL](https://drive.google.com/file/d/1Sa1ZNyRDTX36RlEEKgyQWsUZGg0xYiI_/view?usp=sharing)

[GitHub repository URL](https://github.com/tornicke/social-network-api)
