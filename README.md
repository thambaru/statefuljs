#StatefulJS
##Introduction

StatefulJS is published under MIT License and depends on jQuery which is to show manually the state of processes by `<button>`s (or visible `<any>`). This comes in handy on slow connections or AJAX requests. Stateful has deprecated from Bootstrap since since v3.3.5 but if you still need it, clap your hands now.

##Features

* Light-weight but powerful.
* Doesn't harm to your stylings like other plugins.
* Usable with Twitter-Bootstrap. (Adds class `disabled`; so use default or style yourself.)
* Compatible with WordPress. (Used `jQuery` instead `$`)

##Usage

All you have to do is to set `data-loading-text` to a prefered text or just leave blank to show default "Loading...". Delay of the toggle can be also set in milliseconds with `data-loading-delay` but it's optional with default 3000ms (3 secs).

Note: attribute `data-loading-text=""` is a must.

From v1.1 you can set global parameters:

* `text` (string) : Text to display on stateful
* `delay` (string) : Time to hold stateful
* `disabled` (boolean) : Disable gloabally if `true`

within `$(document).stateful({`parameter:value`})`.


##Demo

http://thambaru.github.io/statefuljs/
