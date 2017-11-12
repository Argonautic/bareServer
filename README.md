Aight, listen up Potts. This is a super bare bones server. To run this server, make sure you have node and npm installed, open your terminal, and in the terminal, do the following:
<ul>
  <li>Navigate to the base folder (or directory, as programmers call it) of this project, the one that contains the file package.json</li>
  <li>Run the command <strong>npm install</strong></li>
  <li>After everything has installed, run the command <strong>npm run watch</strong>
</ul>

You should now have a functional server that will send you the contents of index.html if you visit the url <strong>http://localhost:8080</strong>. To edit index.html, go into the src/ folder, and from there you can do anything you could do with a regular html page like add a link to custom CSS or Bootstrap, load scripts, and other stuff. However, using links to visit other paths in the same localhost domain (e.g. localhost:8080/examplepage) will take a little additional setup on the server, which I can show you once you get to that point.

Go forth, kiddo.
