import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import './slider.scss';

const Slider= () => {

    const clubs = [ 
					{
						id: 1,
						image : 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png', 
						name : 'Chelsea'
					},

				    {
						id: 2,
						image : 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
						name : 'Barcelona'
					},

					{
						id: 3,
						image : 'https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Fjuventus_416x416.jpg',
						name : 'Juventus'
					},

					{
						id: 4,
						image : 'https://i.ebayimg.com/images/g/Hd4AAOSwdg9fEMQT/s-l300.jpg',
						name : 'Bayern Munich'	
					}
	]
	
  	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = clubs.length - 1;
		if (index < 0) setIndex(lastIndex);
		
		if (index > lastIndex) setIndex(0);
		
	}, [index, clubs]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);

		return () => {
			clearInterval(slider);
		};
	}, [index])

  return (
    <section className="section">
		<div className="header">
        	<h4>EUROPEAN TOP FOOTBALL CLUBS</h4>
      	</div>

		<div className="section-center">
			{clubs.map((club, clubIndex) => {   
				const {id, image, name }  = club;    

				let position = 'nextSlide';
				if (clubIndex === index) position = 'activeSlide';
				
				if (
					clubIndex === index - 1 ||
					(index === 0 && clubIndex === club.length - 1)
				) {
					position = 'lastSlide';
				}

				return <article className = {position}  key={id}>
					<img src={image} alt={name} className="club-img" />
					<h4>{name}</h4>
				</article>
				
			})}
			<button className="prev" onClick={() => setIndex(index - 1)}>
			<FiChevronLeft />
			</button>
			<button className="next" onClick={() => setIndex(index + 1)}>
			<FiChevronRight />
			</button>
      </div>
		
	       
    </section>
  )
}

export default Slider;
