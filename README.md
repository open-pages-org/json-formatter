# JSON Formatter

This is a light-weight JSON formatter which works on the client side. It is written in JavaScript and uses the [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) function to parse the JSON string and then uses the [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) function to format the JSON object.

If the parse fails then it will attempty to format the object as best as possible with indents and line breaks to make it more readable.

## Demo

You can view the live demo [here](https://json.open-pages.com/).

## Usage

1. Paste your JSON string into the text area.
2. See the formatted JSON object in the output area.

## Example

### Input

```json
{
  "name": "John Doe",
  "age": 30,
  "cars": { "car1": "Ford", "car2": "BMW", "car3": "Fiat" }
}
```

### Output

```json
{
  "name": "John Doe",
  "age": 30,
  "cars": {
    "car1": "Ford",
    "car2": "BMW",
    "car3": "Fiat"
  }
}
```

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Open your browser and navigate to the URL provided by the development server.
