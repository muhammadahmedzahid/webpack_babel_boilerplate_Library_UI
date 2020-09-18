console.log('test');
// in order to add the dependency for the css to override the previous method.
// run the command {npm install css-loader style-loader --save-dev}
// the code runs from right to left in the webpack.config.js file in the array.
// after importing the data we are gonna import this file in index also.
// ./ is used to specify the current directory
// import './test.css'
import Tooltip from './UI_files/tooltip';
import Dropdown from './UI_files/dropdown';
import Tabs from './UI_files/tabs';
import Snackbar from './UI_files/snackbar'
// create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// create dropdowns

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', e => {
    snackbar.show('you clicked me :) ');
})