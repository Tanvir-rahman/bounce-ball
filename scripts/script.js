const myFunction = () => {

  // window measurement
  const height = window.innerHeight - 110;
  const width = window.innerWidth - 110;

  // change position amount
  const height2 = height + 10;
  const width2 = width + 10;

  // ball moving speed
  let xSpeed = -1;
  let ySpeed = 1;

  setInterval(() => {

    // getting ball style
    const ball = document.getElementById("ball");
    const style = window.getComputedStyle(ball);

    // getting x and y position of ball
    let yPosition = style.getPropertyValue("top");
    let xPosition = style.getPropertyValue("left");

    // parsing
    xPosition = parseInt(xPosition);
    yPosition = parseInt(yPosition);

    // checking if ball go outside of the boundary
    if (xPosition >= width2 || xPosition <= 0) {
      xSpeed *= -1;
    }
    if (yPosition >= height2 || yPosition <= 0) {
      ySpeed *= -1;
    }

    // For ball moving, chnaging position
    xPosition = String(xPosition - xSpeed) + "px";
    yPosition = String(yPosition + ySpeed) + "px";

    // Applying style
    document.getElementById("ball").style.setProperty("top", yPosition);
    document.getElementById("ball").style.setProperty("left", xPosition);

  }, 10);
};