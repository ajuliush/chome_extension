document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: toggleDarkMode
        });
    });
});

function toggleDarkMode() {
    const darkModeStyle = `
      html, body {
        filter: invert(1) hue-rotate(180deg);
        background: #000;
      }
      img, video {
        filter: invert(1) hue-rotate(180deg);
      }
    `;

    const existingStyleTag = document.getElementById('dark-mode-style');
    if (existingStyleTag) {
        existingStyleTag.remove();
    } else {
        const style = document.createElement('style');
        style.id = 'dark-mode-style';
        style.innerHTML = darkModeStyle;
        document.head.appendChild(style);
    }
}
