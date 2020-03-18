# gift-finder

## Technologies used:
Visual Studio Code, React, Etsy API, React Router, React Slick, My SQL, Passport, Express, NPM, Node, Bootstrap, jQuery

## Summary
 
Giftr is an all-in-one solution to finding the perfect gift for a friend or an acquaintance. A user can click on one of our special occasion buttons to find specific gifts. The filter section allows the user to find more detailed results under an occasion. The application takes all of the trouble out of stressing over "the perfect gift". Our simple UI and user flow (with log-in state) makes it easy to start browsing gifts. If a user wants to save a gift idea, they can use our bookmarking feature. They click on their bookmarks section to see all of their gift ideas, courtesy of Etsy's API. 

## What we learned:
1. How to manage the state of a larger app with React (I.E. different components re-render based on changes to it's state).
2. How to use the bcrypt JS package to store fragile information such as passwords in a hashed-manner.
3. Using Sequelize for file sending and setting up environmental variables.
4. Using Sequelize to serialize and de-serialize a user with Passport.js, given their log-in state.
5. Using React Router to set up route direction using React Components.
6. Redirecting user based off of component state in accordance with log-in verification.

## Steps we took:
1. Performed extensive research on APIs at our disposal that would return a variety of product data to use and display.
2. Configured APIs, endpoints, and tested results.
3. Implemented Navbar component with filter searches. Query strings set up to reflect which occasion button is clicked when calling the API.
4. Search-filter button implemented to limit results.
4. Product cards components created and implemented to display images and URLs passed through as props.
5. Implemented Passport.js to create log-in and log-out states.
6. Models set up for User, Index, and Bookmark.
7. Bookmarking coded to allow user to save their favorite results, and viewable only from a logged-in state.
8. React slick research and carousel component development. Took steps to fix initial display error for slide one.
9. Mobile responsiveness added to site.

## Sources:
In-class assignments, API documentation, TA and instructor feedback, previous homework assignments.

## Gifs and Screenshots

## Scrolling through results of book search
![gif of search page](https://github.com/leticiaroncero/google-books-search/blob/master/scroll.gif)

 ## UI view of search page and result
![Search view](https://github.com/leticiaroncero/google-books-search/blob/master/Screen%20Shot%202020-02-26%20at%204.05.22%20PM.png)

## Code snippet of Book schema for Mongoose DB
![Book schema](https://github.com/leticiaroncero/google-books-search/blob/master/Screen%20Shot%202020-02-26%20at%204.07.50%20PM.png)

## Code snippet of saving a book as an object and posting it to an API route via Axios
![Saving function](https://github.com/leticiaroncero/google-books-search/blob/master/Screen%20Shot%202020-02-26%20at%204.08.50%20PM.png)