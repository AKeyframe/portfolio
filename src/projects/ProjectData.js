
//GitOne Frontend
//GitTwo Backend

//If GitTwo is 'empty' then a mono repository

//Projects
const data = [
    //Family Table
    {name: 'The Family Table',
     about: 'The Family Table is a full MERN stack web application for users to store their favorite recipes and share them with their loved ones. Users are able to create families, allowing any who are a part of them to see any recipe of the family members. Protected with JWT tokens, only you and your family / families will have access to your personal recipes. ',
     photos: ['https://i.imgur.com/zxr8pLt.png'],
     live: 'https://the-family-table.netlify.app/',
     gitOne: 'https://github.com/AKeyframe/familyRecipes-frontend',
     gitTwo: 'https://github.com/AKeyframe/familyRecipes-backend',
     tags: ['Javascript', 'MERN', 'MongoDB', 'Express', 'React', 'Node', 'Bcrypt', 'JWT', 'jsonwebtoken', 'SASS', 'Cors'],
     },

     //Dating App
     {name: 'Dating App',
     about: 'This mobile app, created with React Navtive in a traditional MERN stack, is the beginnings of a modern, non-monetarily predatory dating app. The app itself allows users to create their profile, set what they are looking for, and receive other users profiles based on the criteria they set. ‘Liking’ someone will allow that user to see who liked them and gives them the opportunity to match with them, eventually allowing the two users to chat together.',
     photos: ['https://i.imgur.com/zxr8pLt.png'],
     live: 'empty',
     gitOne: 'https://github.com/AKeyframe/dating-app-frontend',
     gitTwo: 'https://github.com/AKeyframe/dating-app-backend',
     tags: ['Javascript', 'MERN', 'MongoDB', 'Express', 'React-Native', 
     'Bcrypt', 'JWT', 'jsonwebtoken', 'SASS'],
     },

    //DnD
     {name: 'DnD',
     about: "This DnD character manager is a full CRUD, full MEEN stack application, created to help cleanly present the numerous points of information for a player's character and campaign in a clear and concise manner. Right now this application features, modern and secure user authentication, as well as, character and campaign creation, campaign invitations, and a fully self referential database.",
     photos: ['https://i.imgur.com/zxr8pLt.png'],
     live: 'https://dnd-character-manager.herokuapp.com/',
     gitOne: 'https://github.com/AKeyframe/dnd-character-manager',
     gitTwo: 'empty',
     tags: ['Javascript', 'MEEN', 'MongoDB', 'Express', 'EJS', 'Node', 'Method-Override', 'Bcrypt'],
     },

    //Bookworms Bible
     {name: 'Bookwroms Bible',
     about: 'A purely frontend, Javascript and jQuery web application that allows readers to search for books using the Google Books API. Readers can then create and curate book lists from the results, allowing readers to easily keep track of books they wish to read and have already read.',
     photos: ['https://i.imgur.com/zxr8pLt.png'],
     live: 'https://bookworms-bible-jet.vercel.app/',
     gitOne: 'https://github.com/AKeyframe/Bookworms-Bible',
     gitTwo: 'empty',
     tags: ['Javascript', 'jQuery', 'Google Books API'],
     },

    //Ask for Storefront
     {name: 'GA Club',
     about: 'GA club is an example storefront, a full crud, full stack web app created with Rails and React. GA Club allows users to browse for various sneakers and add them to their cart.',
     photos: ['https://i.imgur.com/zxr8pLt.png'],
     live: 'https://ga-club-frontend.herokuapp.com/',
     gitOne: '',
     gitTwo: '',
     tags: ['Ruby', 'Rails', 'Javascript', 'React'],
     },

    
     
];

//template
// {name: '',
//      about: '',
//      photos: [],
//      live: '',
//      gitOne: '',
//      gitTwo: '',
//      tags: [],
//      }

export {
    data
}