# Change Log

## [3.2.0] (2019-02-15)
	- Adjusted list (file explorer) colors and added colors for the new filter widget

## [3.1.0] (2019-01-10)
	- Added `async` to "emphasized control flow" (those easy to miss...) color category (bright purple, like `await`, `break`)
	- DOM properties are now colored like other properties to avoid an uncolored prop on an object because it's named as a DOM property (like .checked)

## [3.0.4] (2018-12-08)
	Fixed problem with wrong extension display name

## [3.0.0] (2018-11-22)
	Now the color palette is a lot more consistent as a whole
	Many changes, notable:
	- Syntax: changed colors of control flow, all form of comments
	- UI: changed highlight colors of range selection, selected line, matched bracket pairs, find match
	
## [2.1.1] (2018-11-16)
	sass fix (I started using sass, probably more adjustment to come)

## [2.1.0] (2018-11-15)
	comments are now a lot darker (use 'better comments' extension for special colored comments)
	added inherited class color
	fixes with quotes

## [2.0.3] (2018-10-02)
	Fixed object literal key was green instead of blue

## [2.0.0] (2018-09-30)
	UI: started to theme the UI
	

## [1.3.1] (2018-09-15)
	JS: added color for labels: vivid pink

## [1.3.0] (2018-09-15)
	CSS: class and id for CSS are now violet to distinguish from green values
	CSS: @media, @keyframes are now better

## [1.2.0]
	revert to dark purple for control flow
	dark green for top-level vars (window and document)

## [1.1.0]
	purple top-level vars (window and document)

## [1.0.0]
	light green for support function/class (JSON, console etc.)
	dark green for control flow 

## [0.8.0]
	adjustments for comments and semi-colon colors
	few additions for more contrast or better highlight of some keywords

## [0.7.5]
	Changed color for control flow keywords (if else switch...) so they stand out.

## [0.7.4]
	strings in normal template literal now also grey
	delete keyword is now pink/red

## [0.7.3]
	regexp strings are now grey

## [0.7.1]
	Color constants (css) are now correctly colored as a value

## [0.7.0]
	First beta: only js/html/css/json are verified.