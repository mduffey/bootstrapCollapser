bootstrapCollapser
==================

Simplifies writing collapse panels in bootstrap.

To write a collapsing div in bootstrap, you normally have to write:
```html
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapseItem">
          Title
        </a>
      </h4>
    </div>
    <div id="collapseItem" class="panel-collapse collapse">
      <div class="panel-body">
        Content
      </div>
    </div>
  </div>
```
What I've done is set a few new data attributes in the main panel. Now instead, you just write:
```html
  <div class="panel panel-primary" data-collapse="yes" data-collapseid="collapseItem" data-collapsetitle="Title" data-paneltype="default">
    Content
  </div>
```
Include bootstrap.collapser.js and you're done! It will find ALL items with "data-collapse" as an attribute recursively, so sub collapsibles are an option:
```html
  <div class="panel panel-primary" data-collapse="yes" data-collapseid="test" data-collapsetitle="collapseTest" data-paneltype="default">
      I want content here.
      <div data-collapse="yes" data-collapseid="subtest" data-collapsetitle="collapseSubTest" data-paneltype="danger">
          Sub content.
      </div>
  </div>
  ```
Obviously this isn't really for optimization; the DOM will have to be searched for all collapsibles you create. This is for code cleanliness; when you're repeatedly using collapsibles for a project, setting all the values on the stock approach can be a pain.
