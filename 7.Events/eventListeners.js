const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener
clearBtn.onclick = function () {
  alert('Clear Items');
};

clearBtn.onclick = function () {
  console.log('Clear Items');
};

// addEventListener() //this is more recommended method of adding events
clearBtn.addEventListener('click', () => alert('Clear Items'));

// Use named function
clearBtn.addEventListener('click', onClear);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);

// removeEventListener()
//set timeout is an async javascript method to delay the running of a function
// 5000ms after page load
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
