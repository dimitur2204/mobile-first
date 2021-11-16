(() => {
	const initialCards = [
		{
			title: 'Semaphore',
			author: 'Requin Chagrin',
			requestor: 'John Doe',
		},
		{
			title: 'S&M',
			author: 'Rihanna',
			requestor: 'John Doe',
		},
		{
			title: 'BUTTERFLY EFFECT',
			author: 'Travis Scott',
			requestor: 'John Doe',
		},
		{
			title: 'Semaphore',
			author: 'Requin Chagrin',
			requestor: 'John Doe',
		},
	];
	let cardsToRender = [...initialCards];
	const cardToRender = (cardInfo) => {
		return `<section class="card next-song-card">
<section class="card-info">
    <picture>
        <source
            media="(min-width: 750px)"
            srcset="./images/album-cover@2x.png"
        />
        <img
            class="album-image"
            src="./images/album-cover.png"
            alt="Cover of some album"
        />
    </picture>
    <section class="song-info">
        <h1>${cardInfo.title}</h1>
        <h3 class="song-author">${cardInfo.author}</h3>
        <p class="small">Requested by: ${cardInfo.requestor}</p>
    </section>
</section>
<section class="likes">
    <img src="./icons/heart.svg" alt="Heart icon" />
    <p class="number-of-likes">10</p>
</section>
</section>`;
	};
	const render = () => {
		const cardsParent = document.querySelector('.cards');
		cardsParent.innerHTML = '';
		cardsToRender.forEach((c) => {
			cardsParent.innerHTML += cardToRender(c);
		});
	};
	const searchSongInput = document.querySelector('.search-song-input');
	searchSongInput.addEventListener('input', (e) => {
		const searchValue = e.target.value;
		cardsToRender = initialCards.filter((c) => {
			return (
				c.author.toLowerCase().includes(searchValue.toLowerCase()) ||
				c.title.toLowerCase().includes(searchValue.toLowerCase())
			);
		});
		console.log(cardsToRender);
		render();
	});
	render();
})();
