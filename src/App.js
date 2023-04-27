import './App.css';
import React, { useState, useEffect } from 'react';
import { poem_arr } from './utils/static-data'
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  // const gradientStyle = {
  //   background: 'linear-gradient(to bottom, #FFF8DC 0%, #DC143C 25%)'
  // };
  // const gradientStyle2 = {
  //   background: 'linear-gradient(to bottom, #DC143C 0%, #B22222 25%)'
  // };
  // const gradientStyle3 = {
  //   background: 'linear-gradient(to bottom, #B22222 0%, #CD5C5C 25%)'
  // };
  // const gradientStyle4 = {
  //   background: 'linear-gradient(to bottom, #CD5C5C 0%, #FFF8DC 25%)'
  // };

  const paddingTop = {
    paddingTop:'120px',
    // paddingBottom:'200px'
  };
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #FFF8DC 0%, #FFFACD 25%)'
  };
  const gradientStyle2 = {
    background: 'linear-gradient(to bottom, #FFFACD 0%, #FFEFD5 25%)'
  };
  const gradientStyle3 = {
    background: 'linear-gradient(to bottom, #FFEFD5 0%, #FFE4B5 25%)'
  };
  const gradientStyle4 = {
    background: 'linear-gradient(to bottom, #FFE4B5 0%, #FFDAB9 25%)'
  };

  const gradient_arr = [gradientStyle,gradientStyle2,gradientStyle3,gradientStyle4,gradientStyle4]

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      console.log(windowHeight)
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 220;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  // To check the scroll position on page load
  reveal();

  return (
    <div className="App" style={gradient_arr[Math.floor(scrollPosition/800)]}>
      <header className="App-header">
        <h1 style={{paddingTop:window.innerHeight/2}}>שירי אהבה ישנים</h1>
        <div className="poem-feed">

            {poem_arr.map((poem,poem_idx) =>(
                <div className='poem animated animatedFadeInUp fadeInUp reveal' style={poem_idx!==0?paddingTop:{}}>
                  {poem.split("\n\n").map((house) => (
                    house.split("\n").map((line) =>(line? <p className='reveal'>{line}<br/></p> : <br/>))
                  ))}
                </div>
            ))}
        </div>
      </header>
      <h1 className='poem animated animatedFadeInUp fadeInUp reveal' style={ {
    paddingTop:'320px',
    paddingBottom:'40px',
  }}>הסוף</h1>
    </div>
  );
}

export default App;
