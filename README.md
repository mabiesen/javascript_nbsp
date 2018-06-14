# javascript_nbsp
Add non-breaking space to end of string on specified elements, ids, or classes

The goal is to flexibly change the non-breaking nature of html text to prevent "widowed" html, defined as a single word or a couple of words ending up on their own line.  Currently, this is accomplished through either:

1. hard-coding a breaking space -  Makes for really ugly code.
2. rendering breaking spaces into the text in the server - not flexible to changes and variations in client window.
3. using css - this make really ugly code, with weird spans everywhere.

Example input can be found in the body on-load event in the example html.

Accepted inputs are arrays of classes, ids, and/or tags.  A numerical value is required to set the number of desired widow-friends (a call it a widdow gaggle)
