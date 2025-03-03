let input;
let slider;
let sliderLabel;
let button;
let isBouncing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(10, 10);
  input.size(200);
  input.value('Yuan');
  
  slider = createSlider(28, 50, 32);
  slider.position(input.x + input.width + 10, 10);
  
  sliderLabel = createDiv('文字大小: ' + slider.value() + 'px');
  sliderLabel.position(slider.x + slider.width + 10, 10);
  sliderLabel.style('color', 'white');
  
  button = createButton('跳動');
  button.position(sliderLabel.x + sliderLabel.width + 10, 10);
  button.mousePressed(toggleBounce);
}

function draw() {
  background(0); // 設置背景顏色為黑色
  fill(0); // 設置文字顏色為黑色
  rect(0, 0, width, 40); // 清空滑桿那一行的背景
  fill(255); // 設置文字顏色為白色
  let textValue = input.value();
  let textSizeValue = slider.value();
  textAlign(LEFT, TOP);
  textSize(textSizeValue);
  
  sliderLabel.html('文字大小: ' + textSizeValue + 'px');
  
  let y = 40; // 從40開始，避免覆蓋滑桿那一行
  while (y < height) {
    let x = 0;
    while (x < width) {
      let offset = isBouncing ? sin(frameCount * 0.1 + x * 0.05) * 10 : 0;
      text(textValue, x, y + offset);
      x += textWidth(textValue) + 20; // 每行之間的間距
    }
    y += textSizeValue + 10; // 每行之間的間距
  }
}

function toggleBounce() {
  isBouncing = !isBouncing;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
