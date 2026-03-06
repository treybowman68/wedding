import sound from '../public/wedding.mov?url'

export async function loadExcitedBtn() {
  const btn = document.querySelector<HTMLButtonElement>('#hero button');
  btn?.addEventListener('click', handleClick);
}

function handleClick(event: Event) {
  const btn = event?.currentTarget as HTMLButtonElement;
  btn.textContent = '🎉 So Excited! 🎉';
  btn.disabled = true;
  playweddingsound();
}

function playweddingsound() {
  const audio = new Audio(sound);
  audio.play();
}

