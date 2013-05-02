var transitions =	[
  'transition',
  'MozTransition',
  'msTransition',
  'OTransitions',
  'WebkitTransition'
];

var el = document.createElement('div'), style;

for (var i = 0; i < transitions.length; i++) {
	style = transitions[i];
	if (el.style[style] != null) {
		module.exports = style;
		break;
	}
}