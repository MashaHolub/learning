import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
    cors({
      origin: '*',
      // Allow follow-up middleware to override this CORS for options
      preflightContinue: true,
    }),
  );

const PORT = process.env.PORT || 8080;

app.get("/profiles", (req, res) => {
    res.json({
        profiles: [
            {
                name: "Vlad",
                imgLink: "./img/Vlad.png",
                imgId: "profile_Vlad",
                imgAlt: "profile_photo"
            },
            {
                name: "Masha",
                imgLink: "./img/Masha.png",
                imgId: "profile_Masha",
                imgAlt: "profile_photo"
            },
            {
                name: "Add Profile",
                imgLink: "./img/+.svg",
                imgId: "add_Profile",
                imgAlt: "profile_photo"
            }
        
        ]
    })
});

const movies = [
    {
        id: '1',
        name: "Borsch",
        imgLink: "./img/image 3.png",
        imgAlt: "Borsch",
        section: "Popular on Netflix",
        position: 3
    },
    {
        id: '2',
        name: "Cabinet of Curiosities",
        imgLink: "./img/image 6.png",
        imgAlt: "Cabinet of Curiosities",
        section: "Popular on Netflix",
        position: 5
    },
    {
        id: '3',
        name: "Spider-Man",
        imgLink: "./img/image 1.png",
        imgAlt: "Spider-Man",
        section: "Popular on Netflix",
        position: 1
    },
    {
        id: '4',
        name: "The Witcher",
        imgLink: "./img/image 2.png",
        imgAlt: "The Witcher",
        section: "Popular on Netflix",
        position: 2
    },
    {
        id: '5',
        name: "Black Mirror",
        imgLink: "./img/image 5.png",
        imgAlt: "Black Mirror",
        section: "Popular on Netflix",
        position: 4
    },
    {
        id: '6',
        name: "The Big Short",
        imgLink: "./img/image 4.png",
        imgAlt: "The Big Short",
        section: "Tranding now",
        position: 1
    },
    {
        id: '7',
        name: "Brooklyn nine-nine",
        imgLink: "./img/image 7.png",
        imgAlt: "Brooklyn nine-nine",
        section: "Tranding now",
        position: 2
    },
    {
        id: '8',
        name: "Howl's Moving Castle",
        imgLink: "./img/image 16.png",
        imgAlt: "Howl's Moving Castle",
        section: "Tranding now",
        position: 3
    },
    {
        id: '9',
        name: "Luxemburg-Luxemburg",
        imgLink: "./img/image 17.png",
        imgAlt: "Luxemburg-Luxemburg",
        section: "Tranding now",
        position: 4
    },
    {
        id: '10',
        name: "Arcane",
        imgLink: "./img/image 11.png",
        imgAlt: "Arcane",
        section: "Tranding now",
        position: 5
    },
    {
        id: '11',
        name: "Dark",
        imgLink: "./img/image 9.png",
        imgAlt: "Dark",
        section: "Casual Viewing",
        position: 1
    },
    {
        id: '12',
        name: "Breaking Bad",
        imgLink: "./img/image 8.png",
        imgAlt: "Breaking Bad",
        section: "Casual Viewing",
        position: 2
    },
    {
        id: '13',
        name: "Shrek",
        imgLink: "./img/image 15.png",
        imgAlt: "Shrek",
        section: "Casual Viewing",
        position: 3
    }, 
    {
        id: '14',
        name: "Stranger Things",
        imgLink: "./img/image 10.png",
        imgAlt: "Stranger Things",
        section: "Casual Viewing",
        position: 4
    }, 
    {
        id: '15',
        name: "Cunk on Earth",
        imgLink: "./img/image 13.png",
        imgAlt: "Cunk on Earth",
        section: "Casual Viewing",
        position: 5
    }
];

const menuItemsArray = ["Home", "TV Shows", "Movies", "New & Popular","My List"]
const sectionsArray = ["Popular on Netflix", "Tranding now", "Casual viewing"]

app.get('/search', (req, res) => {
    res.json(movies.filter(m => m.name.includes(req.query.id)));
})

app.get('/movies', (req, res) => {
    res.json({
        movies
    })
})

app.patch('/movies/:id', (req, res) => {
    const id = req.params.id;
    movies.some((m, i) => {
        if (m.id === id) {
            movies[i] = { ...m, ...req.body };
        }
    })

    res.json(movies.find(m => m.id === id));
})

app.post('/search', (req, res) => {
    res.json(movies.filter(m => m.name.includes(req.query.name)));
})

app.get("/menu", (req, res) => {
    res.json({
        menu: menuItemsArray
    })
});


app.get("/sections", (req, res) => {
    res.json({
        sections: sectionsArray
    })
});


app.listen(PORT, () => {
    console.log("Server Listening on: http://localhost:"+PORT);
});