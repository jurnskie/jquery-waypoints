## Synopsis

A plugin for adding specified css classes to given elements, via data-animate attribute on the element.

## Code Example

run the plugin via :

```javascript
$(yourElement).waypoints();
````

Inside your html, place an element with data-attribute like so:

```html
<div data-animate="animate" data-waypoint="anyElement"> </div>
```

Options:

- scrollTopOffset: 25 // offset from top 
- addedClass: 'animate' // class added to element for applying css transitions
- menuClass: '.main' // for calculating fixed menu height
- activeOnWidth: 700 //screen width on wich the plugin is active

## Motivation

I needed code for animating elements on the screen, on a certain & given position. 

## Installation

Include the plugin file in your footer (after jQuery).

