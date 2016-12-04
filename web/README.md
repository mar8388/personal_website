# personal_website
Source code for my personal website at www.georgejose.com. Please remove all private information if you wish to fork this. 

##How to use

### Using Docker (Recommended)
- Install docker
- Clone repo and run `docker build -t personal_website . && docker run -i -p 8080:8080 personal_website`

### Locally using Node
- Set up [node.js, npm](https://nodejs.org)
- Clone repository `git clone https://github.com/willedflipper66/personal_website.git`
- Install node.js packages `sudo npm install`
- Launch node.js `sudo npm start bin/www`
- You should now be able to view the website at `http://localhost:80`

