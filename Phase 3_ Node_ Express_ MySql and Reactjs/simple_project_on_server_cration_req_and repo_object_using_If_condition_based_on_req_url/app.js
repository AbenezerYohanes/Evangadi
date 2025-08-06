let http=require("http");

let Server= http.createServer((req,res) => {

     res.writeHead(200, { "Content-Type": "text/html" });


    if (req.url === "/hotel") {
        res.write(`<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Luxury Hotel</title>
    <style>
        body { margin: 0; font-family: 'Segoe UI', sans-serif; }
        header { background: #1a1a1a; color: white; padding: 15px; }
        .hero { height: 60vh; display: flex; justify-content: center; align-items: center; background: url('https://source.unsplash.com/1600x700/?luxury-resort') no-repeat center/cover; color:white; text-align:center; }
        .hero h1 { font-size: 3rem; }
        footer { text-align:center; padding:20px; background:#1a1a1a; color:white; }
    </style>
</head>
<body>
    <header>
        <div class='logo'>🌴 LuxuryHotel</div>
    </header>

    <section class='hero'>
        <div>
            <h1>Welcome to Luxury Hotel</h1>
            <p>Experience comfort, elegance, and world-class service.</p>
        </div>
    </section>

    <footer>
        <p>© 2025 Luxury Hotel. All Rights Reserved.</p>
    </footer>
</body>
</html>`);

    }else if (req.url === "/sports") {
        
    res.write(`<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Sport Home</title>
    
    <style>
        /* Global Styles */
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            color: #333;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header */
        header {
            background: linear-gradient(to right, #0056b3, #007bff);
            color: #fff;
            padding: 20px 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
        
        header p {
            margin: 5px 0 0;
            font-size: 1.2rem;
            opacity: 0.9;
        }

        /* Navigation */
        nav {
            background-color: #333;
            text-align: center;
            padding: 10px 0;
        }
        
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        
        nav a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            transition: color 0.3s ease;
        }
        
        nav a:hover {
            color: #007bff;
        }

        /* Hero Section */
        .hero {
            background: url('https://source.unsplash.com/1600x900/?sports-action') no-repeat center center/cover;
            color: #fff;
            text-align: center;
            padding: 100px 20px;
            position: relative;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }

        .hero h2 {
            font-size: 3rem;
            margin: 0 0 10px;
            position: relative;
            z-index: 1;
        }

        .hero p {
            font-size: 1.5rem;
            margin: 0;
            position: relative;
            z-index: 1;
        }

        /* Content Section */
        .content {
            padding: 50px 0;
            text-align: center;
        }

        .content h2 {
            color: #0056b3;
            margin-bottom: 20px;
            font-size: 2rem;
        }

        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-10px);
        }

        .card img {
            max-width: 100%;
            border-radius: 8px;
        }

        .card h3 {
            color: #007bff;
        }

        /* Footer */
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px 0;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    
    <header>
        <div class='container'>
            <h1>Sportify</h1>
            <p>Your Ultimate Source for Sports News & Action</p>
        </div>
    </header>

    <nav>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Live Scores</a></li>
            <li><a href='#'>Videos</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    </nav>

    <section class='hero'>
        <div class='container'>
            <h2>Passion. Dedication. Victory.</h2>
            <p>Get the latest highlights, scores, and stories from the world of sports.</p>
        </div>
    </section>

    <section class='content'>
        <div class='container'>
            <h2>Featured Articles</h2>
            <div class='card-container'>
                <div class='card'>
                    <img src='https://source.unsplash.com/400x300/?football' alt='Football Match'>
                    <h3>The Rise of a New Champion</h3>
                    <p>An in-depth look at the team that defied all odds to win the league title.</p>
                </div>
                <div class='card'>
                    <img src='https://source.unsplash.com/400x300/?basketball' alt='Basketball Game'>
                    <h3>Top 10 Moments of the Season</h3>
                    <p>Relive the most breathtaking dunks, shots, and plays that defined the season.</p>
                </div>
                <div class='card'>
                    <img src='https://source.unsplash.com/400x300/?running' alt='Runner'>
                    <h3>Marathon Training: A Guide for Beginners</h3>
                    <p>Expert tips and a detailed plan to get you ready for your first marathon.</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class='container'>
            <p>&copy; 2025 Sportify. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>`);
    } else if (req.url === "/Movie") {
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎬 Movie World</title>
    
    <style>
        /* Global Styles */
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0b0c10;
            color: #fff;
        }

        h1, h2 {
            margin: 0;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Header / Navigation */
        header {
            background-color: #1f2833;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 50px;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        header .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #66fcf1;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
        }

        nav a:hover {
            color: #66fcf1;
        }

        /* Hero Section */
        .hero {
            background: url('https://source.unsplash.com/1600x700/?movie,cinema') no-repeat center center/cover;
            height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
        }

        .hero-content {
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        .btn {
            background: #66fcf1;
            color: #0b0c10;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn:hover {
            background: #45a29e;
        }

        /* Movie Section */
        .movies {
            padding: 50px 20px;
            text-align: center;
        }

        .movies h2 {
            margin-bottom: 30px;
            color: #66fcf1;
        }

        .movie-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }

        .movie-card {
            background: #1f2833;
            width: 200px;
            border-radius: 10px;
            overflow: hidden;
            transition: 0.3s;
        }

        .movie-card:hover {
            transform: scale(1.05);
        }

        .movie-card img {
            width: 100%;
            display: block;
        }

        .movie-card h3 {
            margin: 10px;
        }

        .movie-card p {
            margin: 0 10px 15px;
            font-size: 0.9rem;
            color: #c5c6c7;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 20px;
            background: #1f2833;
            color: #c5c6c7;
            margin-top: 50px;
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">🎬 MovieWorld</div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Genres</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Welcome to Movie World</h1>
            <p>Discover the latest blockbusters and timeless classics.</p>
            <a href="#" class="btn">Explore Now</a>
        </div>
    </section>

    <section class="movies">
        <h2>Popular Movies</h2>
        <div class="movie-container">
            <div class="movie-card">
                <img src="https://source.unsplash.com/200x300/?movie,action" alt="Movie 1">
                <h3>Action Blast</h3>
                <p>Explosive adventures and heart-pounding stunts.</p>
            </div>
            <div class="movie-card">
                <img src="https://source.unsplash.com/200x300/?movie,romance" alt="Movie 2">
                <h3>Romantic Tale</h3>
                <p>A story of love and destiny in stunning locations.</p>
            </div>
            <div class="movie-card">
                <img src="https://source.unsplash.com/200x300/?movie,thriller" alt="Movie 3">
                <h3>Thriller Night</h3>
                <p>Mystery and suspense that will keep you guessing.</p>
            </div>
            <div class="movie-card">
                <img src="https://source.unsplash.com/200x300/?movie,animation" alt="Movie 4">
                <h3>Animated Fun</h3>
                <p>Family-friendly adventures with colorful characters.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>© 2025 Movie World. All Rights Reserved.</p>
    </footer>

</body>
</html>
`)

        } else {
        res.write("<h1>Welcome to the Node.js Server</h1>");
        res.write("<p>Use the following URLs to access different pages:</p>");  
        res.write("<ul>");
        res.write("<li><a href='/hotel'>Hotel</a></li>");
        res.write("<li><a href='/sports'>Sports</a></li>"); 
        res.write("<li><a href='/Movie'>Movie</a></li>");
        res.write("</ul>");
    }

    

























    













res.end();
});

Server.listen(3000);


