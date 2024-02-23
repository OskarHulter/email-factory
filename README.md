# email-factory

## tools
https://litmus.com/builder/ac11b59

## references
https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/

## intro to ghost-table layouts

A <table> element
A <tr> element (table row)
A <td> element (table data cell, or as it’s more commonly referred to, a table cell)

```html
<table>
    <tr>
        <td>

            // Email content //

        </td>
    </tr>
</table>
```

Inserted inside the opening <table> tag are the table attributes: role, cellpadding, cellspacing, and border. The attributes are defined as follows:

- role="presentation": defines the <table> as being presentational, rather than using data, preventing it from creating issues for subscribers using assistive technologies such as screen readers.
- cellpadding="0": removes the default cell padding, preventing gaps appearing around the content of each table cell.
- cellspacing="0": removes the default cell spacing, preventing gaps appearing between each table cell.
- border="0": removes the default borders, preventing borders from appearing in the table.

Additional attributes, such as width and align, may also be inserted inside the opening <table> and <td> tags.

```html 
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td width="100%">

            // Email content //

        </td>
    </tr>
</table>
```

### Styles
Inserted inside the opening <td> tag is the inline CSS that styles the table cell (the <td>) and its content. The text styling will be inherited by all the paragraphs within the <td>, unless the paragraphs themselves have inline CSS overriding those styles inside their respective opening <p> tags. The style margin:0; is applied inside each opening <p> tag to remove the default spacing applied to paragraphs.

```html 
<table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td width="100%" style="font-family:Arial, sans-serif; font-size:16px; line-height:1.5em; color:#333333; padding:2em; background-color:#e4e4e4;">

            <p style="margin:0;">Paragraph of text.</p>

        </td>
    </tr>
</table>
```

## responsive layout: FLUID

The easiest solution is to stick to a single column and make your emails fluid. This means that as the viewport shrinks, your content area shrinks.

```css
.container {
  max-width: 600px;
  width: 100%;
}
```

## Images in email

When inserting images remember to include the following attributes or risk them breaking in different clients:

- `src`
- `alt`
- `width`
- `height`
- `border`

# RESPONSIVE IMAGES
As mentioned, use Retina images at 1.5× to 3×, and set image dimensions inline.

```html
<img src="https://www.smashingmagazine.com/wp-content/uploads/2016/11/logo.png" height="100" width="600" alt="Company Logo" style="max-width: 100%;">
```

We can’t rely on max-width: 100%; because some clients ignore it. You will also want to embed the following CSS:

```css
@media only screen and (max-width: 620px) {
  img {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
```

- `<table>` instead of `<div>`,
- when using tables, don’t forget `border="0" cellpadding="0" cellspacing="0"`.
- `#FFFFFF` instead of `#FFF`,
- `padding` instead of `margin`,
- CSS2 instead of CSS3,
- HTML4 instead of HTML5,
- `background-color` instead of `background`,
- HTML attributes instead of CSS,
- inline CSS instead of style sheets or `<style>` blocks.
- consider fontsize medium or fontsize max to avoid zoom
