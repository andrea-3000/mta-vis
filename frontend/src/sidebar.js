const container = document.querySelector('.map-overlay-right')

// Set up button to toggle container
document.querySelector('.right__button')
  .addEventListener('click', function(){
    if(container.classList.contains('open')){
      container.classList.remove('open');
    }else{
      container.classList.add('open');
    }
  });

const STATUS_TEXT = (t) => t.toLowerCase();
const STATUS_CLASS = {
  'GOOD SERVICE': 'status--good',
  'PLANNED WORK': 'status--planned',
  'DELAYS': 'status--delays',
  'PART SUSPENDED': 'status--suspended',
  'SUSPENDED': 'status--suspended',
};
async function loadStatus(){
  const data = await fetch('https://comp426.peterandringa.com/mta/status').then(res => res.json());
  if(!data || !data.lines) return console.error('Could not load line status.');
  console.log(data);
  for(const line of Object.keys(data.lines)){
    const text = document.querySelector(`.group--${line.toLowerCase()} .status-group__status`);
    console.log('looking for text', `group--${line.toLowerCase()} .status-group__status`)
    text.innerText = STATUS_TEXT(data.lines[line].status);
    
    text.classList.remove(...Object.values(STATUS_CLASS));
    text.classList.add(STATUS_CLASS[data.lines[line].status])
  }
}

loadStatus();

setInterval(loadStatus, 60*1000);
