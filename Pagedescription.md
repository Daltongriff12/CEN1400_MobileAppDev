# Your Watchlist, Your Way!

## Overview
This is a mobile-friendly web application built with **HTML5**, **CSS**, **jQuery**, and **jQuery Mobile**.  
It lets users view curated TV shows and add their own favorites to a personalized watchlist using **localStorage**.

##  Live Demo
[View on GitHub Pages](https://daltongriff12.github.io/CEN1400_MobileAppDev/)

##  Features
- 📱 Mobile-first UI using **jQuery Mobile**
- 💾 Save your favorite shows using **localStorage**
- 📋 View curated list of TV shows
- 🧩 Add new shows with title, genre, rating, release date, and notes
- 🔁 Load saved shows from your profile page

## Homepage
- Homepage has three navigation options
    My profile
    TV Shows
    Add New Show
- Page also has a brief description of the website
- With static footer (footer is on each page)

## My Profile
-This page is where your saved TV shows will load from local storage and display your saved shows. NOTE: if not show is input using the "Add New Show" page the load my saved shows button wont return anything.
- For navigation this page also has a back button to bring you back to the home page.

## Curated TV Shows
-This page shows the preloaded tv shows in a 3x4 grid 
-this page also offers a back button for navigation back to homepage

## Add a New Show
-This page offers a form where you can add a show. Form features 5 sections.
-once the show is added here is it saved to local storage and can be loaded by the Load my Saved Shows button on the My Profile page

##local storage logic
<script>
		function saveForm(){
			let showData= {
					title: document.getElementById("showTitle").value,
					genre: document.getElementById("showGenre").value,
					rating: document.getElementById("showRating").value,
					release: document.getElementById("releaseDate").value,
					notes: document.getElementById("userNotes").value
			};
			localStorage.setItem("favoriteShow", JSON.stringify(showData));
			alert("Show saved to watchlist!");
		}
		function loadForm() {
			let stored = localStorage.getItem("favoriteShow");
			if (stored) {
				let showData = JSON.parse(stored);
				document.getElementById("savedOutput").innerHTML = 
					"<strong>Saved Show:</strong><br>" +
					"Title: " + showData.title + "<br>" +
					"Genre: " + showData.genre + "<br>" +
					"Rating: " + showData.rating + "<br>" +
					"Release Date: " + showData.release + "<br>" +
					"Notes: " + showData.notes;
			}
		}
	</script>
