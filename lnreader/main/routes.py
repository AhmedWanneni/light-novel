from flask import Blueprint, render_template

main = Blueprint('main', __name__)


cards = [
    {
        "img":"https://f01.mrcdn.info/file/mrportal/i/6/k/n/rC.dQVlWJSU.jpg",
        "title":"They Say I Was Born a King's",
        "chap":"Vol.TBD Chapter 940: The Spark of Rebellion",
        "nbr":"3"
    }
]

last = [
    {
        "img":"https://media.senscritique.com/media/000004349370/150/Mushishi.jpg",
        "title":"Kitasou Girl",
        "chaps":[{
            "chap":"chapter 1",
            "date":"October 11, 2017"
        },
        {
            "chap":"chapter 2",
            "date":"October 11, 2017"
        }
        ],
        "disc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        "rating":"3.9"
        
    },
    {
        "img":"https://media.senscritique.com/media/000004349370/150/Mushishi.jpg",
        "title":"Kitasou Girl",
        "chaps":[{
            "chap":"chapter 1",
            "date":"October 11, 2017"
        },
        {
            "chap":"chapter 2",
            "date":"October 11, 2017"
        }
        ],
        "disc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        "rating":"3.9"
        
    }
]
reading = {
    "title":"Solo Leveling",
    "img":"http://demo.mangabooth.com/wp-content/uploads/2017/10/wallhaven-530467-110x150.png",
    "chap":"Chapter 25",
    "date":"12 hours ago"
}

populars = [
    {
        "title":"The Promised Neverland",
        "img":"http://demo.mangabooth.com/wp-content/uploads/2017/10/wallhaven-548614-110x150.jpg",
        "chap":"Posuka Demizu, Kaiu Shirai",
        "chapnbr":"134",
        "status":"Ongoing"
    },
    {
        "title":"The Promised Neverland",
        "img":"http://demo.mangabooth.com/wp-content/uploads/2017/10/wallhaven-548614-110x150.jpg",
        "chap":"Posuka Demizu, Kaiu Shirai",
        "chapnbr":"134",
        "status":"Ongoing"
    }
]

@main.route("/")
@main.route("/home")
def home():
    return render_template('home.html', title='Home page',trends=cards,recos=cards,lasts=last,reading=reading,read=reading,populars=populars,being_read=populars)
    


