import OnLoad from '../index';
import test from 'tape-rollup';

const init = () => {
  const container = document.createElement('div');
  container.id = 'fixture';
  document.body.appendChild(container);
};

const setup = () => {
  const container = document.getElementById('fixture');
  container.innerHTML = `
    <img class="img-1" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=">
    <div class="img-2" style="background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=')"></div>
  `;

  return container;
};

init();

test('Loaded class from img element', assert => {
  const container = setup();
  const image = container.querySelector('.img-1');
  new OnLoad(image);

  setTimeout(() => {
    assert.ok(image.classList.contains('loaded'), 'image has .loaded class');
    assert.end();
  }, 500);
});

test('Image loads from CSS', assert => {
  const container = setup();
  const image = container.querySelector('.img-2');
  new OnLoad(image);

  setTimeout(() => {
    assert.ok(image.classList.contains('loaded'), 'image has .loaded class');
    assert.end();
  }, 500);
});
