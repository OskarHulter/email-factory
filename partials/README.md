If you want to just copy and paste that code you are welcome to, just be sure to edit the content in the lang, dir attributes, charset, title, aria-label.

If you are interested in the reasons behind why each part of the code is there, read on and I’ll break it down in more detail.

## containers

https://www.goodemailcode.com/email-code/container

```html

<!--[if true]>
<table role="presentation" style="width:37.5em" align="center"><tr><td>
<![endif]-->
<div style="max-width:37.5em; margin:0 auto">
  <!-- email content in here -->
</div>
<!--[if true]>
</td></tr></table>
<![endif]-->

```


```html

<!--[if true]>
<table role="presentation" style="width:37.5em" align="center"><tr><td>
<![endif]-->
<!--[if !true]><!-->
  <div style="max-width:37.5em; margin:0 auto">
<!--<![endif]-->
  <!-- email content in here -->
<!--[if !true]><!-->
  </div>
<!--<![endif]-->
<!--[if true]>
</td></tr></table>
<![endif]-->

```

```html

<div style="background:#000000">
  <!--[if true]>
  <table role="presentation" width="100%" align="center" style="background:#000000"><tr><td></td><td style="width:37.5em;background:#ffffff">
  <![endif]-->
  <div style="max-width:37.5em; margin:0 auto;background:#ffffff">
    <!-- email content in here -->
  </div>
  <!--[if true]>
  </td><td></td></tr></table>
  <![endif]-->
</div>

```

```html

```

```html

```
