# JavaScript Text Shuffle Animation

This repository contains a JavaScript library for creating text shuffle animations. This can be used to add a dynamic and engaging effect to your web projects.

## Features

- Easy to integrate
- Lightweight
- Customizable animation speed and style

## Installation

You can include the script in your project by downloading the file or using a CDN.

```html
<script src="path/to/text-shuffle.js"></script>
```

## Usage

To use the text shuffle animation, you need to initialize the library and add `.shuffle` class to the desired text elements.

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Shuffle Animation</title>
    <style>
        .shuffle-text {
            font-size: 24px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="shuffle-text shuffle">Hello, World!</div>
    <div class="shuffle" data-shuffle-duration="30">This is shuffle text animation</div>
    <div class="shuffle" data-shuffle-duration="25" data-shuffle-type="symbol">Enjoy!</div>
<script src="path/to/shuffle.js"></script>
</body>
</html>
```

## Options

- `.shuffle`: add shuffle class to animate the desier element.
- `data-shuffle-duration`: The speed of the shuffle animation in milliseconds.
- `data-shuffle-type`: The number of times the text will shuffle before settling.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any questions or suggestions, please contact [your-email@example.com].
