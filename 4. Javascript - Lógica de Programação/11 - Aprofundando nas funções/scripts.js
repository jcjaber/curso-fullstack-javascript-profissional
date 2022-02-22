let spaceshipVelocity = 150;

function slowDown(velocity, printer) {

  let deceleration = 20;

  while(velocity > 0) {
    printer(velocity);
    velocity -= deceleration
    if (velocity < 0) {
      velocity = 0;
    }
  }

  alert('A nave está parada. As comportas estão prontas para serem abertas.');
}

let printerSlowDown = (velocity) => alert('Desacelerando a nave para ' + velocity + 'km/s')

slowDown(spaceshipVelocity, printerSlowDown)