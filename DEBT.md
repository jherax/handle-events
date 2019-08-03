# Technical Debt

Although this file should contains technical debt, it also can contain
improvements or feature request.

## Migrate rawgit to jsdelivr

Since [RawGit](https://rawgit.com) has reached the end of its useful life,
it is necessary to migrate to another CDN service as
[jsDelivr](https://www.jsdelivr.com/rawgit).

```text
https://cdn.jsdelivr.net/gh/jherax/handle-events@1.1.3/dist/handle-events.js
```

## Add unit tests

It is necessary to add unit tests to ensure code quality and predictability.

## Add a method to trigger events

It would be useful to have a method to trigger events, e.g.

```javascript
trigger(node: Element, eventns: String | Object)
```

## Get events from other source

It could be nice to have a method that can obtain the methods registered
by other sorces, such as jQuery internal API.

For example:

```javascript
addSources('jQuery', function($) {
  // perform logic here...
  return {
    // return the cache object from internal API
    node,
    events: {
      click: [{ handler, namespace, useCapture, selector, delegated, source }],
    },
  };
});
```

The method `getEventListeners` should check also in the sources registered
in order to get the event listeners.
