import './style.css';
import mainpage from './mainpage.js';
import Comments from './api.js';
import commentPage from './comment.js';
import * as API from './api.js';

mainpage();
// commentPage();

const comment = new Comments;

async function startCommenting() {
    await game.createComment('Donat');
  }
  startCommenting();

  document.getElementById('addCommentbtn').addEventListener('click', () => {
    comment.displayScores();
  }, false);
  
  document.getElementById('addCommentbtn').addEventListener('click', () => {
    comment.addComment();
  }, false);
