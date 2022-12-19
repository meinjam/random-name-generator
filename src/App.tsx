import { useState } from 'react';
import wordListOne from './helpers/wordListOne.json';
import wordListTwo from './helpers/wordListTwo.json';
import CopyIcon from './assets/copy.svg';

const App = () => {
  const [userName, setUserName] = useState('');
  const [tooltipClassName, setTooltipClassName] = useState('tooltip');

  const handleGenerateName = () => {
    const generatdNameOne = wordListOne[Math.floor(Math.random() * wordListOne.length)];
    const generatdNameTwo = wordListTwo[Math.floor(Math.random() * wordListTwo.length)];
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    const actualName = `${generatdNameOne}_${generatdNameTwo}${randomNumber}`;
    setUserName(actualName);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(userName);

    setTooltipClassName('tooltip show');

    setTimeout(() => {
      setTooltipClassName('tooltip');
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
        <span className={tooltipClassName}>Copied</span>
      </div>
      <button onClick={handleGenerateName}>Generate</button>
    </div>
  );
};

export default App;
