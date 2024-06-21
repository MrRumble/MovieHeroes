# 🎬 MOVIE HEROES 🍿

In a world where endless streaming options leave viewers overwhelmed and indecisive, one website rises above the rest. Discover a realm where personalized recommendations and hidden gems are just a click away. Welcome to MovieHero — the ultimate destination for movie lovers. Are you ready to find your next  film? 🍿😎

# WATCH A VIDEO DEMONSTRATION FROM THE TEAM
[Download the video](Movie_Hero_Demo_Video.mp4)


## Table of Contents

# DEMONSTRATION
Here is a demonstration of the project in action from the team:

[Watch the video](https://drive.google.com/file/d/11Q0dM1yV5phJiC1QQ6kSxfHyyAbXlrZ_/view?usp=drive_link)

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Installation

Instructions on how to install and set up the project.


## performance issues

- find_movie_id is slow becuase the 'id' field we are searching for is not indexed. the db must perform a full table scan to find the record.
- A full table scan involves examining each row in the table one by one until the desired record is found.
- This process is time-consuming, especially as the size of the table grows.
- It works for now but could be an interesting refactor challenge?
