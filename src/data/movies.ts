import lordOfTheRings from '@/assets/movies/lord-of-the-rings.png';
import wonderWoman from '@/assets/movies/wonder-woman.png';
import borat from '@/assets/movies/borat.png';
import guardiansOfTheGalaxy from '@/assets/movies/guardians-of-the-galaxy.png';
import arrival from '@/assets/movies/arrival.png';
import theWalk from '@/assets/movies/the-walk.png';
import theMask from '@/assets/movies/the-mask.png';
import homeAlone from '@/assets/movies/home-alone.png';

export interface Movie {
  id: number;
  title: string;
  image: string;
  genre: string[];
  year: number;
  rating: number;
  director: string;
  description: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image: lordOfTheRings,
    genre: ["Fantasy", "Adventure"],
    year: 2001,
    rating: 8.8,
    director: "Peter Jackson",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    id: 2,
    title: "Wonder Woman",
    image: wonderWoman,
    genre: ["Action", "Fantasy"],
    year: 2017,
    rating: 7.4,
    director: "Patty Jenkins",
    description: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny."
  },
  {
    id: 3,
    title: "Borat",
    image: borat,
    genre: ["Comedy"],
    year: 2006,
    rating: 7.3,
    director: "Larry Charles",
    description: "Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world."
  },
  {
    id: 4,
    title: "Guardians of the Galaxy",
    image: guardiansOfTheGalaxy,
    genre: ["Action", "Sci-Fi"],
    year: 2014,
    rating: 8.0,
    director: "James Gunn",
    description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
  },
  {
    id: 5,
    title: "Arrival",
    image: arrival,
    genre: ["Sci-Fi", "Drama"],
    year: 2016,
    rating: 7.9,
    director: "Denis Villeneuve",
    description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world."
  },
  {
    id: 6,
    title: "The Walk",
    image: theWalk,
    genre: ["Drama", "Biography"],
    year: 2015,
    rating: 7.3,
    director: "Robert Zemeckis",
    description: "In 1974, high-wire artist Philippe Petit recruits a team of people to help him realize his dream: to walk the void between the World Trade Center towers."
  },
  {
    id: 7,
    title: "The Mask",
    image: theMask,
    genre: ["Comedy", "Fantasy"],
    year: 1994,
    rating: 6.9,
    director: "Chuck Russell",
    description: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask."
  },
  {
    id: 8,
    title: "Home Alone",
    image: homeAlone,
    genre: ["Comedy", "Family"],
    year: 1990,
    rating: 7.7,
    director: "Chris Columbus",
    description: "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas Eve."
  }
];

export const genres = ["All", "Action", "Comedy", "Sci-Fi", "Fantasy", "Drama", "Adventure", "Family", "Biography"];
