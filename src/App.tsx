import { useState } from 'react';
import wordListOne from './helpers/wordListOne.json';
import wordListTwo from './helpers/wordListTwo.json';
import CopyIcon from './assets/copy.svg';

const App = () => {
  const [userName, setUserName] = useState('');

  const handleGenerateName = () => {
    const generatdNameOne = wordListOne[Math.floor(Math.random() * wordListOne.length)];
    const generatdNameTwo = wordListTwo[Math.floor(Math.random() * wordListTwo.length)];
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    const actualName = `${generatdNameOne}_${generatdNameTwo}${randomNumber}`;
    setUserName(actualName);
  };

  const handleCopyToClipboard = () => {
    const copyText = document.getElementById('myInput');

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert('Copied the text: ' + copyText.value);
    const bbbbbb = document.getElementById('tooltip');
    console.log(bbbbbb);
    if (bbbbbb.classList.contains('show')) {
      bbbbbb.classList.remove('show');
    } else {
      bbbbbb.classList.add('show');
    }

    setTimeout(() => {
      bbbbbb.classList.remove('show');
    }, 500);
  };

  return (
    <div className='app'>
      <div className='input-box'>
        <input
          // placeholder='generate random username'
          type='text'
          id='myInput'
          disabled
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {!userName ? '' : <img src={CopyIcon} alt='' onClick={handleCopyToClipboard} />}
        <span className='tooltip' id='tooltip'>
          Copied
        </span>
      </div>
      <button onClick={handleGenerateName}>Generate</button>
    </div>
  );
};

export default App;
