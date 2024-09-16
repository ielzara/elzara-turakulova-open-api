# Cat Breed Explorer

## Description
Cat Breed Explorer is a web application that allows users to search for and learn about various cat breeds. It features a user-friendly interface with breed search functionality, detailed breed information display, and a random cat image generator.

## Features
- Search for cat breeds
- Display detailed breed information (description, characteristics, origin, etc.)
- Navigate through breeds with Previous/Next buttons
- View random cat images
- Responsive design for desktop and mobile devices
- About page with website information and developer's social links

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari)
- Internet connection (for API calls)
- A text editor (e.g., VSCode, Sublime Text) if you want to make changes

## Installation and Setup
1. Clone the repository or download the project files to your local machine.
   ```
   git clone https://github.com/ielzara/elzara-turakulova-open-api.git
   ```
2. Navigate to the project directory:
   ```
   cd elzara-turakulova-open-api
   ```

3. Create a `config.js` file in the `js` directory with your API key:
   ```javascript
   const config = {
       API_KEY: 'your_api_key_here'
   };
   ```
   Replace `'your_api_key_here'` with your actual API key from [The Cat API](https://thecatapi.com/).

## Running the Application
1. Open the `index.html` file in your web browser.

2. The application should now be running in your browser. You can use the search functionality to look up cat breeds and navigate through the results.

3. To view the About page, click on the "About" link in the navigation menu or open `about.html` directly in your browser.

## File Structure
- `index.html`: Main page of the application
- `about.html`: About page with developer information
- `css/`
  - `index.css`: Styles for the main page
  - `about.css`: Styles for the about page
- `js/`
  - `index.js`: JavaScript for the main functionality
  - `config.js`: Configuration file for API key (you need to create this)
- `img/`: Directory for storing images used in the project

## API Usage
This project uses [The Cat API](https://thecatapi.com/). You'll need to sign up for a free API key to use in the `config.js` file.

## Contributing
Feel free to fork the project and submit pull requests with any enhancements, bug fixes, or improvements.

## Contact
Elzara Turakulova - endjik@gmail.com

Project Link: https://github.com/ielzara/elzara-turakulova-open-api)