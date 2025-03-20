# Subscription Credit Component

A modern and user-friendly subscription/trial credit display component. Built with HTML, CSS, and JavaScript, featuring a progress indicator and pricing information as a reusable web interface element.

## Overview

This component allows users to visually track their current subscription status. A circular progress bar displays used and remaining credit amounts and offers upgrade options for users.

## Features

- Intuitive credit usage tracking with circular progress indicator
- Used/total credit display
- Responsive design compatible with all devices
- "Upgrade" and "Learn More" action buttons
- Lightweight and fast-loading design

## Project Structure

```
subscription-credit-component/
│
├── app.js           # JavaScript functions and interaction logic
├── index.html       # HTML structure
└── style.css        # CSS styles and animations
```

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Responsive design principles

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/elifbaskurt/-subscription-credit-component.git
   ```

2. Open `index.html` in your browser to view the project locally.

## Customization

To adapt the component for your project:

### Colors

You can change the main colors in the `style.css` file:

```css
:root {
  --primary-color: #0066cc; /* Progress bar color */
  --background-color: #f5f7fa; /* Background color */
  --text-color: #182b49; /* Text color */
}
```

### Progress Value

You can adjust the credit usage ratio in the `app.js` file:

```javascript
// Credit usage percentage (between 0-100)
const creditUsage = 28; // 28% used
```

## Usage Example

To use the component in your HTML:

```html
<div class="subscription-credit-container">
  <h3>Free trial credit</h3>
  <div class="progress-circle-container">
    <div class="progress-circle" id="creditProgress"></div>
    <div class="credit-info">
      <h2>$249 / $876</h2>
      <p>Free trial credit</p>
    </div>
  </div>
  <p class="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate, esse excepturi aperiam cumque voluptatem beatae sapiente debitis autem quidem eaque.
  </p>
  <div class="action-buttons">
    <button class="btn-upgrade">Upgrade</button>
    <button class="btn-learn-more">Learn More</button>
  </div>
</div>
```

## Browser Compatibility

- Chrome (last 3 versions)
- Firefox (last 3 versions)
- Safari (last 3 versions)
- Edge (last 3 versions)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
