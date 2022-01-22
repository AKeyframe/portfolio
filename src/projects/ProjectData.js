
//GitOne Frontend
//GitTwo Backend

//If GitTwo is 'empty' then a mono repository

//Projects
const data = [
    //Family Table
    {name: 'The Family Table',
     about: 'The Family Table is a full MERN stack web application for users to store their favorite recipes and share them with their loved ones. Users are able to create families, allowing any who are a part of them to see any recipe of the family members. Protected with JWT tokens, only you and your family / families will have access to your personal recipes. (Heroku takes a bit to spin up so give the site a sec to load as well as signup/login)',

     photos: ['https://i.imgur.com/vdQZtw8.png', 'https://i.imgur.com/JSpfJ0y.png', 'https://i.imgur.com/BEidtie.png', 'https://i.imgur.com/IjXF2cC.png', 'https://i.imgur.com/dSJnWnp.png', 'https://i.imgur.com/2FRJ3zj.png', 'https://i.imgur.com/EP64PjY.png','https://i.imgur.com/I22DTcq.png', 'https://i.imgur.com/tb2kSUm.png', 'https://i.imgur.com/HSUisFv.png', 'https://i.imgur.com/u6kbN24.png',  ],

     mobilePhotos: ['https://i.imgur.com/uksJsOe.png', 'https://i.imgur.com/zJdcEfA.png', 'https://i.imgur.com/Dl0uGAO.png', 'https://i.imgur.com/tZIfslL.png', 'https://i.imgur.com/llf2qoQ.png', 'https://i.imgur.com/b6Xer7c.png', 'https://i.imgur.com/PrHwvPS.png', 'https://i.imgur.com/emfbs8D.png', 'https://i.imgur.com/N0nYbNq.png', 'https://i.imgur.com/gX9vdNk.png', 'https://i.imgur.com/nFOaW4b.png', 'https://i.imgur.com/PwbhPF9.png',],

     live: 'https://the-family-table.herokuapp.com/',
     gitOne: 'https://github.com/AKeyframe/familyRecipes-frontend',
     gitTwo: 'https://github.com/AKeyframe/familyRecipes-backend',
     tags: ['Javascript', 'MERN', 'MongoDB', 'Express', 'React', 'Node', 'Bcrypt', 'JWT', 'jsonwebtoken', 'SASS', 'Cors'],
     },

     //Dating App
     {name: 'Dating App',
     about: 'This mobile app, created with React Navtive in a traditional MERN stack, is the beginnings of a modern, non-monetarily predatory dating app. The app itself allows users to create their profile, set what they are looking for, and receive other users profiles based on the criteria they set. ‘Liking’ someone will allow that user to see who liked them and gives them the opportunity to match with them, eventually allowing the two users to chat together.',

     photos: ['https://i.imgur.com/9gx0dJm.png', 'https://i.imgur.com/itlnOcr.png', 'https://i.imgur.com/YJWteQr.png', 'https://i.imgur.com/mq1YG0O.png', 'https://i.imgur.com/YQm47Vx.png', 'https://i.imgur.com/UAJslx4.png', 'https://i.imgur.com/b4F3Dtj.png', 'https://i.imgur.com/Xgqi8os.png', 'https://i.imgur.com/zQaZHAO.png'],

     live: 'empty',
     gitOne: 'https://github.com/AKeyframe/dating-app-frontend',
     gitTwo: 'https://github.com/AKeyframe/dating-app-backend',
     tags: ['Javascript', 'MERN', 'MongoDB', 'Express', 'React-Native', 
     'Bcrypt', 'JWT', 'jsonwebtoken', 'SASS'],
     mobile: true,
    },

    //DnD
    //  {name: 'DnD',
    //  about: "This DnD character manager is a full CRUD, full MEEN stack application, created to help cleanly present the numerous points of information for a player's character and campaign in a clear and concise manner. Right now this application features, modern and secure user authentication, as well as, character and campaign creation, campaign invitations, and a fully self referential database.",
    //  photos: ['https://i.imgur.com/zxr8pLt.png'],
    //  live: 'https://dnd-character-manager.herokuapp.com/',
    //  gitOne: 'https://github.com/AKeyframe/dnd-character-manager',
    //  gitTwo: 'empty',
    //  tags: ['Javascript', 'MEEN', 'MongoDB', 'Express', 'EJS', 'Node', 'Method-Override', 'Bcrypt'],
    //  },

    //Bookworms Bible
     {name: 'Bookwroms Bible',
     about: 'A purely frontend, Javascript and jQuery web application that allows readers to search for books using the Google Books API. Readers can then create and curate book lists from the results, allowing readers to easily keep track of books they wish to read and have already read.',

     photos: ['https://i.imgur.com/eFZ6bWQ.png', 'https://i.imgur.com/EHV3KvL.png', 'https://i.imgur.com/pBnACEY.png', 'https://i.imgur.com/HGcn23G.png',],

     mobilePhotos: ['https://i.imgur.com/zxr8pLt.png', 'https://i.imgur.com/FRiuM33.png', 'https://i.imgur.com/abWicJL.png'],

     live: 'https://bookworms-bible-jet.vercel.app/',
     gitOne: 'https://github.com/AKeyframe/Bookworms-Bible',
     gitTwo: 'empty',
     tags: ['Javascript', 'jQuery', 'Google Books API'],
     },

    //Ask for Storefront
     {name: 'GA Club',
     about: 'GA club is an example storefront, a full crud, full stack web app created with Rails and React. GA Club allows users to browse for various sneakers and add them to their cart. (Heroku takes a bit to spin up so give the site a sec to load)',

     photos: ['https://i.imgur.com/6RNMKrS.png', 'https://i.imgur.com/D6TWIWP.png', 'https://i.imgur.com/7ziUcKx.png', 'https://i.imgur.com/rKojrjk.png', 'https://i.imgur.com/olz8EPe.png', ],
     
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