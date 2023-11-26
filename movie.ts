type Movie = {
  id: number;
  title: string;
  slug: string;
  content: string;
  year: number;
  genre: string[];
  author_id: number;
  created_at: Date;
};

type Author = {
  id: number;
  name: string;
  dateOfBirth: Date;
  created_at: Date;
};

const authors: Author[] = [
  {
    id: 1,
    name: "J.K. Rowling",
    dateOfBirth: new Date("1965-07-31"),
    created_at: new Date(),
  },
  {
    id: 2,
    name: "J.R.R. Tolkien",
    dateOfBirth: new Date("1892-01-03"),
    created_at: new Date(),
  },
  {
    id: 3,
    name: "Brent Weeks",
    dateOfBirth: new Date("1977-03-07"),
    created_at: new Date(),
  },
  {
    id: 4,
    name: "Rick Riordan",
    dateOfBirth: new Date("1964-06-05"),
    created_at: new Date(),
  },
  {
    id: 5,
    name: "Stephen King",
    dateOfBirth: new Date("1947-09-21"),
    created_at: new Date(),
  },
];

const movies: Movie[] = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    slug: "harry-potter-and-the-chamber-of-secrets",
    content:
      "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.",
    year: 1998,
    genre: ["fantasy", "fiction", "adventure"],
    author_id: 1,
    created_at: new Date(),
  },
  {
    id: 2,
    title: "Harry Potter and the Prisoner of Azkaban",
    slug: "harry-potter-and-the-prisoner-of-azkaban",
    content:
      "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series.",
    year: 1999,
    genre: ["fantasy", "fiction", "action"],
    author_id: 2,
    created_at: new Date(),
  },
  {
    id: 3,
    title: "Harry Potter and the Goblet of Fire",
    slug: "harry-potter-and-the-goblet-of-fire",
    content:
      "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series.",
    year: 2000,
    genre: ["fantasy", "fiction", "horror"],
    author_id: 1,
    created_at: new Date(),
  },
  {
    id: 4,
    title: "Harry Potter and the Order of the Phoenix",
    slug: "harry-potter-and-the-order-of-the-phoenix",
    content:
      "Harry Potter and the Order of the Phoenix is a fantasy book written by British author J. K. Rowling and the fifth novel in the Harry Potter series.",
    year: 2003,
    genre: ["fantasy", "fiction", "thriller"],
    author_id: 3,
    created_at: new Date(),
  },
  {
    id: 5,
    title: "Harry Potter and the Half-Blood Prince",
    slug: "harry-potter-and-the-half-blood-prince",
    content:
      "Harry Potter and the Half-Blood Prince is a fantasy book written by British author J. K. Rowling and the sixth novel",
    year: 2005,
    genre: ["fantasy", "fiction", "sci-fi"],
    author_id: 4,
    created_at: new Date(),
  },
];

const genreList = movies.map((movie) => movie.genre).flat();
const uniqueGenre = [...new Set(genreList)];
// console.log(genreList);
// console.log(uniqueGenre);

const movieByGenre = uniqueGenre.map((genre) => ({
  genre,
  movies: movies.filter((movie) => movie.genre.includes(genre)),
}));

const movieWithAuthor = movies.map((movie) => ({
  ...movie,
  author: authors.find((author) => author.id === movie.author_id),
}));

// console.log(movieByGenre);

// console.log(movieWithAuthor);

const paginateMovie = (page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = page * limit;
  return movies.slice(start, end);
};

// console.log(paginateMovie(3, 2));

const findMovieByTitle = (title: string) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );
};

console.log(findMovieByTitle("PRISONER"));
