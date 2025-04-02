<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeriesSeeder extends Seeder
{
    public function run()
    {
        DB::table('series')->insert([
            [
                'title' => 'Breaking Bad',
                'description' => 'A chemistry teacher turned meth manufacturer struggles with the criminal world.',
                'release_date' => '2008-01-20',
                'seasons' => 5,
                'episodes' => 62,
                'rating' => 9.5,
                'genre_id' => 3, // Drama
                'image_path' => 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
                'link' => 'https://www.egybest.co.in/watch/4350',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Friends',
                'description' => 'A sitcom about six friends living in New York City.',
                'release_date' => '1994-09-22',
                'seasons' => 10,
                'episodes' => 236,
                'rating' => 8.8,
                'genre_id' => 2, // Comedy
                'image_path' => 'https://flxt.tmsimg.com/assets/p183931_b_v8_ac.jpg',
                'link' => 'https://web2.topcinema.cam/series/%d9%85%d8%b3%d9%84%d8%b3%d9%84-friends-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Stranger Things',
                'description' => 'A group of kids in a small town face mysterious and supernatural events.',
                'release_date' => '2016-07-15',
                'seasons' => 4,
                'episodes' => 34,
                'rating' => 8.7,
                'genre_id' => 3, // Sci-Fi
                'image_path' => 'https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==',
                'link' => 'https://www.egybest.co.in/watch/3953',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Office',
                'description' => 'A mockumentary about the everyday lives of office employees working at Dunder Mifflin.',
                'release_date' => '2005-03-24',
                'seasons' => 9,
                'episodes' => 201,
                'rating' => 8.9,
                'genre_id' => 2, // Comedy
                'image_path' => 'https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
                'link' => 'https://web2.topcinema.cam/series/%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-office-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Walking Dead',
                'description' => 'A group of survivors navigate a post-apocalyptic world overrun by zombies.',
                'release_date' => '2010-10-31',
                'seasons' => 11,
                'episodes' => 177,
                'rating' => 8.1,
                'genre_id' => 5, // Horror
                'image_path' => 'https://fr.web.img6.acsta.net/pictures/210/454/21045474_20130930201634487.jpg',
                'link' => 'https://www.egybest.co.in/watch/5811',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Avatar: The Last Airbender',
                'description' => 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar.',
                'release_date' => '2005-02-21',
                'seasons' => 3,
                'episodes' => 61,
                'rating' => 9.3,
                'genre_id' => 7, // Animation/Adventure
                'image_path' => 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/avatar_-the-last-airbender.jpg',
                'link' => 'https://egydead.fyi/season/%d9%83%d8%b1%d8%aa%d9%88%d9%86-avatar-the-last-airbender-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Crown',
                'description' => 'A historical drama about the reign of Queen Elizabeth II.',
                'release_date' => '2016-11-04',
                'seasons' => 6,
                'episodes' => 60,
                'rating' => 8.7,
                'genre_id' => 3, // Drama
                'image_path' => 'https://upload.wikimedia.org/wikipedia/en/b/ba/The_Crown_season_2.jpeg',
                'link' => 'https://web2.topcinema.cam/series/%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-crown-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Rick and Morty',
                'description' => 'An eccentric scientist and his easily influenced grandson embark on dangerous and bizarre adventures across the multiverse.',
                'release_date' => '2013-12-02',
                'seasons' => 6,
                'episodes' => 61,
                'rating' => 9.2,
                'genre_id' => 7, // Animation/Sci-Fi
                'image_path' => 'https://media.senscritique.com/media/000009446091/source_big/Rick_et_Morty.png',
                'link' => 'https://egydead.fyi/episode/%d8%a7%d9%86%d9%85%d9%8a-rick-and-morty-the-anime-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-1-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Game of Thrones',
                'description' => 'Noble families vie for control of the Iron Throne in a medieval fantasy world.',
                'release_date' => '2011-04-17',
                'seasons' => 8,
                'episodes' => 73,
                'rating' => 9.3,
                'genre_id' => 7, // Fantasy
                'image_path' => 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
                'link' => 'https://www.egybest.co.in/watch/1397',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'From',
                'description' => '"From" is a horror-mystery series about people trapped in a town with terrifying creatures and dark secrets.',
                'release_date' => '2022-02-20',
                'seasons' => 3,
                'episodes' => 30,
                'rating' => 9.3,
                'genre_id' => 5, // Horror
                'image_path' => 'https://miro.medium.com/v2/resize:fit:1400/1*39M4XbHXCTfBenNNqLLyLA@2x.jpeg',
                'link' => 'https://www.egybest.co.in/watch/3977',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Simpsons',
                'description' => 'The satiric adventures of a working-class family in the misfit city of Springfield.',
                'release_date' => '1989-12-17',
                'seasons' => 34,
                'episodes' => 750,
                'rating' => 8.7,
                'genre_id' => 7, // Animation/Comedy
                'image_path' => 'https://firewireblog.com/wp-content/uploads/2022/09/simpsons_s33_social_4x5_2989x3736_en_v1_xxxxxx_a27f111e.png.jpeg',
                'link' => 'https://egydead.fyi/season/%d9%83%d8%b1%d8%aa%d9%88%d9%86-simpsons-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%83%d8%a7%d9%85%d9%84/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Sherlock',
                'description' => 'Consulting detective Sherlock Holmes and his partner, Dr. John Watson, solve complex crimes in modern-day London.',
                'release_date' => '2010-07-25',
                'duration' => 90, // Per episode
                'rating' => 9.1,
                'genre_id' => 4, // Crime/Drama
                'image_path' => 'https://picfiles.alphacoders.com/355/355468.jpg',
                'link' => 'https://web2.topcinema.cam/series/%d9%85%d8%b3%d9%84%d8%b3%d9%84-sherlock-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85/',
                'seasons' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Gravity Falls',
                'description' => 'Twins Dipper and Mabel Pines spend the summer at their great-uncle\'s tourist trap in the enigmatic Gravity Falls, Oregon.',
                'release_date' => '2012-06-15',
                'seasons' => 2,
                'episodes' => 40,
                'rating' => 8.9,
                'genre_id' => 7, // Animation/Mystery
                'image_path' => 'https://vignette.wikia.nocookie.net/disney/images/5/51/Gravity_falls_poster.jpg/revision/latest/scale-to-width-down/2000?cb=20161114045752&path-prefix=es',
                'link' => 'https://egydead.fyi/episode/%d9%85%d8%b3%d9%84%d8%b3%d9%84-gravity-falls-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-1/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Umbrella Academy',
                'description' => 'A dysfunctional family of adopted super-powered siblings reunites to solve the mystery of their father\'s death and prevent an impending apocalypse.',
                'release_date' => '2019-02-15',
                'duration' => 60, // Per episode
                'rating' => 8.0,
                'genre_id' => 7, // Action/Sci-Fi
                'image_path' => 'https://m.media-amazon.com/images/M/MV5BMzlmMmIxODItYzBjNC00YjMwLWIwOTAtNzVlMTBlNTNkMjZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
                'link' => 'https://web2.topcinema.cam/series/%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-umbrella-academy-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85/',
                'seasons' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'La Casa De Papel',
                'description' => 'A criminal mastermind and his team of robbers carry out an ambitious plan to rob the Royal Mint of Spain, facing personal and external challenges.',
                'release_date' => '2017-05-02',
                'duration' => 70, // Per episode
                'rating' => 8.3,
                'genre_id' => 4, // Crime/Drama
                'image_path' => 'http://www.mulderville.net/images/Netflix/LaCasaDePapel/LaCasaDePapel_001.jpg',
                'link' => 'https://www.egybest.co.in/watch/1754',
                'seasons' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Dragons: Riders of Berk',
                'description' => 'Follow Hiccup and his dragon Toothless as they train dragons and protect their village from various threats.',
                'release_date' => '2012-08-07',
                'duration' => 22, // Per episode
                'rating' => 8.0,
                'genre_id' => 7, // Animation/Adventure
                'image_path' => 'https://images6.fanpop.com/image/photos/37000000/Dragons-Riders-of-Berk-Poster-how-to-train-your-dragon-37086518-2475-3225.jpg',
                'link' => 'https://egydead.fyi/season/%d8%aa%d9%86%d8%a7%d9%86%d9%8a%d9%86-%d9%81%d8%b1%d8%b3%d8%a7%d9%86-%d9%82%d8%b1%d9%8a%d8%a9-%d8%a8%d9%8a%d8%b1%d9%83-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%af/',
                'seasons' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Narcos',
                'description' => 'The series chronicles the rise and fall of the notorious Colombian drug lord Pablo Escobar and the law enforcement efforts to capture him.',
                'release_date' => '2015-08-28',
                'duration' => 50, // Per episode
                'rating' => 8.8,
                'genre_id' => 4, // Crime/Drama
                'image_path' => 'https://2.bp.blogspot.com/-pfRu6E-MsVg/VfRkf3k6GyI/AAAAAAAAAEw/6fC-VqRDhoA/s1600/narcos-netflix-poster.jpg',
                'link' => 'https://www.egybest.co.in/watch/1584',
                'seasons' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'True Detective',
                'description' => 'An anthology crime drama series, with each season following new detectives as they investigate disturbing crimes.',
                'release_date' => '2014-01-12',
                'duration' => 60, // Per episode
                'rating' => 9.0,
                'genre_id' => 4, // Crime/Thriller
                'image_path' => 'https://static1.srcdn.com/wordpress/wp-content/uploads/True-Detective-Poster.jpg',
                'link' => 'https://www.egybest.co.in/watch/6023',
                'seasons' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Ben 10 Classic',
                'description' => 'A young boy discovers a mysterious device that allows him to transform into various alien heroes to fight evil.',
                'release_date' => '2005-12-27',
                'duration' => 22, // Per episode
                'rating' => 7.4,
                'genre_id' => 7, // Animation/Action
                'image_path' => 'https://i.redd.it/c49yn3mwrnr41.jpg',
                'link' => 'https://egydead.fyi/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%83%d8%b1%d8%aa%d9%88%d9%86-%d8%a8%d9%8a%d9%86-%d8%aa%d9%86-%d9%83%d8%a7%d9%85%d9%84-%d9%85%d8%af%d8%a8%d9%84%d8%ac-%d8%aa%d8%ad%d9%85%d9%8a/',
                'seasons' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Haunting of Hill House',
                'description' => 'A family confronts haunting memories of their old home, the Hill House, and its terrifying events that shaped their lives.',
                'release_date' => '2018-10-12',
                'duration' => 60, // Per episode
                'rating' => 8.6,
                'genre_id' => 7, // Horror/Drama
                'image_path' => 'https://images-na.ssl-images-amazon.com/images/I/81Lq44yDCDL._SL1500_.jpg',
                'link' => 'https://egydead.fyi/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-haunting-of-hill-house-2018-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/',
                'seasons' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Good Place',
                'description' => 'A woman finds herself in the afterlife’s “Good Place,” but soon realizes she doesn’t belong there and tries to become a better person.',
                'release_date' => '2016-09-19',
                'duration' => 22, // Per episode
                'rating' => 8.2,
                'genre_id' => 3, // Comedy/Fantasy
                'image_path' => 'https://media.senscritique.com/media/000015624432/source_big/The_Good_Place.jpg',
                'link' => 'https://egydead.fyi/?s=The+Good+Place',
                'seasons' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Dark',
                'description' => 'A German series that blends sci-fi and mystery, exploring the intertwined fates of four families as they uncover disturbing secrets across different timelines.',
                'release_date' => '2017-12-01',
                'duration' => 60, // Per episode
                'rating' => 8.8,
                'genre_id' => 7, // Sci-Fi/Thriller
                'image_path' => 'http://br.web.img3.acsta.net/pictures/17/11/01/13/35/2780331.jpg',
                'link' => 'https://www.egybest.co.in/watch/1407',
                'seasons' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Gumball',
                'description' => 'Follow the hilarious adventures of Gumball Watterson, a blue cat, and his family in the quirky town of Elmore.',
                'release_date' => '2011-05-03',
                'duration' => 11, // Per episode
                'rating' => 8.2,
                'genre_id' => 7,
                'image_path' => 'https://flxt.tmsimg.com/assets/p14886922_b_v8_ab.jpg',
                'link' => 'https://egydead.fyi/season/%d9%83%d8%b1%d8%aa%d9%88%d9%86-%d8%b9%d8%a7%d9%84%d9%85-%d8%ba%d8%a7%d9%85%d8%a8%d9%88%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%87%d8%b4-%d9%85%d8%af%d8%a8%d9%84%d8%ac-%d9%83%d8%a7%d9%85%d9%84/',
                'seasons' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Fargo',
                'description' => 'A darkly comedic crime drama series, each season tells a new story of crime, murder, and misfortune in the upper Midwest.',
                'release_date' => '2014-04-15',
                'duration' => 60, // Per episode
                'rating' => 8.9,
                'genre_id' => 4, // Crime/Drama
                'image_path' => 'https://www.themoviedb.org/t/p/original/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg',
                'link' => 'https://web2.topcinema.cam/series/%d9%85%d8%b3%d9%84%d8%b3%d9%84-fargo-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a-%d9%85%d8%aa%d8%b1%d8%ac%d9%85/',
                'seasons' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Expanse',
                'description' => 'In a future where humanity has colonized the solar system, tensions rise between Earth, Mars, and the Belt, leading to a conflict that threatens the entire human race.',
                'release_date' => '2015-12-14',
                'duration' => 60, // Per episode
                'rating' => 8.5,
                'genre_id' => 7, // Sci-Fi/Drama
                'image_path' => 'https://image.tmdb.org/t/p/original/go2m0Cz5KqEwYFGiXVPNvCUZql3.jpg',
                'link' => 'https://egydead.fyi/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-expanse-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/',
                'seasons' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => "The Handmaid's Tale",
                'description' => 'In a dystopian future, women are subjugated in a totalitarian society where a handmaid is forced to have children for the ruling class.',
                'release_date' => '2017-04-26',
                'duration' => 50, // Per episode
                'rating' => 8.4,
                'genre_id' => 4, // Drama/Thriller
                'image_path' => 'https://4.bp.blogspot.com/-iZSC_U484TE/WQDCKIYGQsI/AAAAAAABojY/1gXZybNv1RoFHDoZgOV4VyH8-UNuKaVRQCLcB/s1600/the-handmaids-tale-2017-poster-3.jpg',
                'link' => 'https://egydead.fyi/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-handmaids-tale-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/',
                'seasons' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Adventure Time',
                'description' => 'A boy and his magical dog go on surreal adventures in the Land of Ooo.',
                'release_date' => '2010-04-05',
                'seasons' => 10,
                'episodes' => 283,
                'rating' => 8.6,
                'genre_id' => 7, // Animation/Fantasy
                'image_path' => 'https://resizing.flixster.com/p4bNRltTA96oMxss5CJVBj0YvSU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjIwNDEwMy53ZWJw',
                'link' => 'https://egydead.fyi/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%88%d9%82%d8%aa-%d8%a7%d9%84%d9%85%d8%ba%d8%a7%d9%85%d8%b1%d8%a9-adventure-time-2010-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Fleabag',
                'description' => 'A witty, cynical woman deals with life, love, and family in her own unique way, breaking the fourth wall to share her thoughts with the audience.',
                'release_date' => '2016-07-21',
                'duration' => 30, // Per episode
                'rating' => 8.7,
                'genre_id' => 3, // Comedy/Drama
                'image_path' => 'https://dol9cswr8axcx.cloudfront.net/series/large/1585684.jpg',
                'link' => 'https://egydead.fyi/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-fleabag-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/',
                'seasons' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Dragon Ball',
                'description' => 'Follow the adventures of Goku and his friends as they defend Earth from powerful foes and search for the mystical Dragon Balls.',
                'release_date' => '1986-02-26',
                'duration' => 24, // Per episode
                'rating' => 8.5,
                'genre_id' => 7, // Animation/Adventure
                'image_path' => 'https://dragonballlatino.net/wp-content/uploads/2020/11/dragon-ball-super-28-poster.jpg',
                'link' => 'https://egydead.fyi/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d8%a7%d9%86%d9%85%d9%8a-dragon-ball-%d9%83%d8%a7%d9%85%d9%84/',
                'seasons' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Detective Conan',
                'description' => 'A high school detective is transformed into a child and solves mysteries while searching for a cure.',
                'release_date' => '1996-01-08',
                'duration' => 25, // Per episode
                'rating' => 8.3,
                'genre_id' => 7, // Animation/Mystery
                'image_path' => 'https://m.media-amazon.com/images/M/MV5BMzA1MmI0OGItODU3NS00ZTA0LWI2OTMtYjMyZDVmNjI2YzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg',
                'link' => 'https://egydead.fyi/season/%d8%ac%d9%85%d9%8a%d8%b9-%d8%ad%d9%84%d9%82%d8%a7%d8%aa-%d8%a7%d9%86%d9%85%d9%8a-detective-conan-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/',
                'seasons' => 30,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
