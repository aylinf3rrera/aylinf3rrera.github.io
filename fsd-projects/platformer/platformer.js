$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(150, 610, 100, 20);
     createPlatform(1150, 610, 100, 20);
     createPlatform(400, 495, 100, 20);
     createPlatform(700, 400, 100, 20);
     createPlatform(1000, 300, 100, 20);
     createPlatform(400, 300, 100, 20);
     createPlatform(200, 200, 100, 20);
    // TODO 3 - Create Collectables
     createCollectable("database", 200, 170);
     createCollectable("database", 1325, 200);
     createCollectable("database", 700, 700);
    // TODO 4 - Create Cannons
     createCannon("top", 500, 1000);
     createCannon("right", 300, 1990);
     createCannon("top", 1000, 950);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
