// This script listens for a click on the extension's icon.
chrome.action.onClicked.addListener(async (tab) => {
  // We need to get the current window to preserve its size and position.
  const currentWindow = await chrome.windows.get(tab.windowId);

  // Create a new window with the 'popup' type.
  // This creates a "lean" window without the address bar and other UI elements.
  // We copy the URL, position, and size from the original window.
  chrome.windows.create({
    url: tab.url,
    type: 'popup',
    left: currentWindow.left,
    top: currentWindow.top,
    width: currentWindow.width,
    height: currentWindow.height
  });

  // Close the original window to complete the "conversion".
  chrome.windows.remove(tab.windowId);
});
