React Cohort Dashboard Challenge Requirements:

Objective:
- Develop a social media style post feed application from scratch, adhering to the provided design specifications. 
- This project will demonstrate your proficiency with ReactJS, including component architecture, state management, and client-server interaction via RESTful APIs.

Learning Outcomes:
- Construct a single-page application (SPA) using ReactJS.
- Utilize React Router DOM for navigational routing between different views within the app.
- Implement HTTP requests to communicate with a RESTful API for data retrieval and manipulation.
- Employ the Context API to manage and distribute application state efficiently, reducing the need for prop drilling.

Development Instructions:
- Component Architecture: Design your application with a modular component structure. Prior to coding, outline your planned components through a diagram, list, or wireframe. This plan should be included in your project repository.
- Data Source: Use the specified REST API for posts, comments, and contact information. Posts and comments will reference contactId for author details.
- Functionality:
    - Post Creation: Implement functionality to create new posts, displaying them at the top of the feed.
    - Commenting: Enable users to comment on posts.
    - Author Identification: Display author initials in a colored circle alongside their posts and comments.
    - Detailed Post View: Utilize routing to present a focused view of a selected post and its comments, accessible by clicking the post's title.
    - Profile Navigation: Allow navigation to user profiles through various interactions, like clicking on names or initials. Use the contact with an ID of 1 to represent the current user.
    - Profile Editing: Facilitate editing of user information on their profile page.
    - Post & Comment Modification: Provide options to update and delete posts and comments.
    - Comment Visibility: Limit initial comment visibility to three per post, with an option to view all comments.

Styling:
- Follow the provided style guide for visual design.
- Achieve a design as close to the provided specifications as possible, focusing primarily on - React development over exact CSS replication.
- The application should be desktop-friendly, with no requirement for mobile responsiveness.

Additional Information:
Ensure you have React Router DOM v6.4 or above installed in your project.
The application's primary focus is on functional ReactJS implementation and proper use of routing and state management techniques, including the Context API.