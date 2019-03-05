import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [{
  title: 'Dinos rule!',
  content: 'I really liked dinosaurs in the second grade.',
  authors: ['T-rex; King of Dinos'],
  comments: ['Yes, I like them too', 'They are okay', 'I like sharks better']
}, {
  title: 'Dinos having trouble!',
  content: 'I noticed a fiery ball in the sky.',
  authors: ['T-rex; King of Dinos', 'Stegasaurus'],
  comments: ['Yes, I saw it too', 'Really?!', 'Fake news!']
}]

ReactDOM.render(<App posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
