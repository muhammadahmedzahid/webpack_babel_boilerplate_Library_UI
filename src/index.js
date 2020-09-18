console.log('test');
// in order to add the dependency for the css to override the previous method.
// run the command {npm install css-loader style-loader --save-dev}
// the code runs from right to left in the webpack.config.js file in the array.
// after importing the data we are gonna import this file in index also.
// ./ is used to specify the current directory
// import './test.css'
import Tooltip from './UI_files/tooltip';

// create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();