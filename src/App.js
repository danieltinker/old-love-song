import './App.css';
import React, { useState, useEffect } from 'react';
import { poem_arr,gradient_arr } from './utils/static-data'
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      reveal()
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 220;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  const paddingTop = {
    paddingTop:'120px',
  };

  // window.addEventListener("scroll", reveal);
  // check the scroll position on page load
  reveal();

  return (
    <div className="App" style={gradient_arr[Math.floor(scrollPosition/1000)]}>
      <header className="App-header">
        <h1 style={{paddingTop:window.innerHeight/2}} className='poem animated animatedFadeInUp fadeInUp reveal' >שירי אהבה ישנים</h1>
        <div className="poem-feed">

            {poem_arr.map((poem,poem_idx) =>(
                <div className='reveal' style={poem_idx!==0?paddingTop:{}}>
                  {poem.split("\n\n").map((house) => (
                    house.split("\n").map((line) =>(line? <p className='reveal'>{line}<br/></p> : <br/>))
                  ))}
                </div>
            ))}
        </div>
      </header>
      <h1 style={ {paddingTop:'320px',paddingBottom:'40px',}}> הסוף </h1>
    </div>
  );
}

export default App;
