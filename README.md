## Synopsis

A plugin for adding specified css classes to given elements, via the data-animate attribute on the element.

## Code Example

run the plugin via :

```javascript
$(yourElement).waypoints();
````

Inside your html, place an element with data-attribute like so:


```html
<div data-animate="animate" data-waypoint="anyElement"> </div>
```

This wil trigger the addClass method on given waypoint, when the element reaches the top of window scrollposition.


As an alternative you can trigger the addClass method when the given element is in the viewport via:

```html
<div data-animate="animate" data-section="mySection"> </div>
```

Options:

- scrollTopOffset: 25 // offset from top 
- addedClass: 'animate' // class added to element for applying css transitions
- menuClass: '.main' // for calculating fixed menu height
- activeOnWidth: 700 //screen width on which the plugin is active

## Motivation

I needed code for animating elements on the screen, on a certain & given position. 

## Installation

Include the plugin file in your footer (after jQuery).

