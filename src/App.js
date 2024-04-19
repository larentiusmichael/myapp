//import logo from './logo.svg';
// import './App.css';
import React from "react"
// import Header from "./Header.js"
// import Footer from "./Footer.js"
// import MainContent from "./MainContent.js"
// import Navbar from "./components/Navbar"
// import Main from "./components/Main"
import Navbar from "./componentsairbnb/Navbar"
import Hero from "./componentsairbnb/Hero"
import Card from "./componentsairbnb/Card"
import data from "./componentsairbnb/data"
// import Contact from "./properties/Contact"
// import Joke from "./properties/Joke"
// import jokesData from "./properties/jokesData"
import Header from "./componentsmeme/Header"
import Meme from "./componentsmeme/Meme"
import Count from "./componentscounter/Counter"
import Star from "./componentsstar/Star"

// import mrWhiskersonImg from "./images/mr-whiskerson.png";
// import fluffykinsImg from "./images/fluffykins.png";
// import felixImg from "./images/felix.png";
// import pumpkinImg from "./images/pumpkin.png";
// import katieZaferesImg from "./images/katie-zaferes.png";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// export default function App() {
//   return (
//       <div>
//           <Header />
//           <MainContent />
//           <Footer />
//       </div>
//   )
// }

export default function App() {

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}


// export default function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
  
//   if (hours < 12) {
//       timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon"
//   } else {
//       timeOfDay = "night"
//   }
  
//   return (
//       <h1>Good {timeOfDay}!</h1>
//   )
// }

// function App() {
//     return (
//         <div className="contacts">
//             <Contact 
//                 img={mrWhiskersonImg} 
//                 name="Mr. Whiskerson"
//                 phone="(212) 555-1234"
//                 email="mr.whiskaz@catnap.meow"
//             />
//             <Contact 
//                 img={fluffykinsImg}
//                 name="Fluffykins"
//                 phone="(212) 555-2345"
//                 email="fluff@me.com"
//             />
//             <Contact 
//                 img={felixImg}
//                 name="Felix"
//                 phone="(212) 555-4567"
//                 email="thecat@hotmail.com"
//             />
//             <Contact 
//                 img={pumpkinImg}
//                 name="Pumpkin"
//                 phone="(0800) CAT KING"
//                 email="pumpkin@scrimba.com"
//             />
//         </div>
//     )
// }

// export default App

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }

// export default function App() {
//     return (
//         <div>
//             <Header />
//             <Meme />
//         </div>
//     )
// }

// export default function App() {
//     const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         const newThingText = `Thing ${things.length + 1}`
//         setThings(prevState => [...prevState, newThingText])
//     }
    
//     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// export default function App() {
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     console.log("App component rendered")
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
//             <Count number={count} />
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }


// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })
    
//     function toggleFavorite() {
//         setContact(prevContact => ({
//             ...prevContact,
//             isFavorite: !prevContact.isFavorite
//         }))
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }


