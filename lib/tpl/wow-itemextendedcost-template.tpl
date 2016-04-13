<script id="wow-itemextendedcost-template" type="text/x-handlebars-template">
    <aside class="wow-item hidden">
    <header class="wow-item__header">
        <p class="header__title">Item Extended Cost {{ 1 }}</p>
    </header>
    <section class="wow-item__stats">
        {{#if 2}}
        <p>Required Honor Points {{ 2 }}</p>
        {{/if}}
        {{#if 3}}
        <p>Required Arena Points {{ 3 }}</p>
        {{/if}}
        {{#if 4}}
        <p>Required Item {{ 9 }}x{{ 4 }} </p>
        {{/if}}
        {{#if 5}}
        <p>Required Item {{ 10 }}x{{ 5 }}</p>
        {{/if}}
        {{#if 6}}
        <p>Required Item {{11 }}x{{ 6 }}</p>
        {{/if}}
        {{#if 14}}
        <p>Required Personal Arena Rating {{ 14 }}</p>
        {{/if}}
    </section>
  </aside>
</script>